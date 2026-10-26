const form = document.getElementById("prediction-form");
const button = document.getElementById("predict-button");
const buttonLabel = button.querySelector(".button-label");
const resultPanel = document.getElementById("result-panel");
const scoreValue = document.getElementById("score-value");
const errorMessage = document.getElementById("error-message");

const rangeFields = [
  ["avg_daily_usage_hours", "usage-output"],
  ["study_hours", "study-output"],
  ["physical_activity_hours", "physical-output"],
  ["sleep_hours_per_night", "sleep-output"],
];

function updateRangeOutput(inputId, outputId) {
  const input = document.getElementById(inputId);
  const output = document.getElementById(outputId);
  const value = Number(input.value);
  output.textContent = `${value} ${value === 1 ? "hour" : "hours"}`;
}

rangeFields.forEach(([inputId, outputId]) => {
  const input = document.getElementById(inputId);
  input.addEventListener("input", () => updateRangeOutput(inputId, outputId));
  updateRangeOutput(inputId, outputId);
});

function getPayload() {
  return {
    age: Number(document.getElementById("age").value),
    gender: document.getElementById("gender").value,
    country: document.getElementById("country").value,
    academic_level: document.getElementById("academic_level").value,
    most_used_platform: document.getElementById("most_used_platform").value,
    purpose_of_use: document.getElementById("purpose_of_use").value,
    avg_daily_usage_hours: Number(document.getElementById("avg_daily_usage_hours").value),
    daily_unlocks: Number(document.getElementById("daily_unlocks").value),
    study_hours: Number(document.getElementById("study_hours").value),
    physical_activity_hours: Number(document.getElementById("physical_activity_hours").value),
    sleep_hours_per_night: Number(document.getElementById("sleep_hours_per_night").value),
    stress_level: document.getElementById("stress_level").value
  };
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorMessage.hidden = true;
  resultPanel.hidden = true;

  if (!form.reportValidity()) return;

  const payload = getPayload();
  button.disabled = true;
  button.classList.add("loading");
  buttonLabel.textContent = "Analyzing your habits…";

  try {
    // Same-origin request: FastAPI serves this page and handles /predict.
    const response = await fetch("/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      const detail = result.detail;
      const message = Array.isArray(detail)
        ? detail.map(item => item.msg || "Invalid input").join("; ")
        : (typeof detail === "string" ? detail : "The server could not process this prediction.");
      throw new Error(message);
    }

    if (typeof result.predicted_mental_health_score !== "number") {
      throw new Error("The server response did not contain a valid predicted score.");
    }

    scoreValue.textContent = result.predicted_mental_health_score.toFixed(2);
    resultPanel.hidden = false;
    resultPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (error) {
    errorMessage.textContent = error.message || "Unable to connect to the prediction service. Please try again.";
    errorMessage.hidden = false;
  } finally {
    button.disabled = false;
    button.classList.remove("loading");
    buttonLabel.textContent = "🚀 PREDICT MY SCORE NOW 🚀";
  }
});
