
# 🧠 Mental Health Score Predictor

A machine learning web application that predicts a user's mental health score based on digital habits, academic routine, lifestyle factors, and stress level.

The application uses **Scikit-learn** for machine learning, **FastAPI** for the backend, and **HTML, CSS, and JavaScript** for the frontend.

> **Disclaimer:** This project is for educational and demonstration purposes only. Predictions are not medical diagnoses or professional mental health assessments.

## 🚀 Live Demo

- 🌐 **Web Application:** [Open Mental Health Score Predictor](https://mental-health-score-predictor-api.onrender.com/)
- 📖 **API Documentation:** [Swagger UI](https://mental-health-score-predictor-api.onrender.com/docs)

## ✨ Features

- 🧠 Predicts a mental health score using a trained machine learning model.
- 📱 Considers digital behaviour, including social media usage and phone unlock frequency.
- 📚 Uses academic factors such as study hours and academic level.
- 😴 Considers sleep duration and physical activity.
- 🧘 Includes self-reported stress level as an input feature.
- ⚡ FastAPI backend for prediction requests.
- ✅ Input validation using Pydantic.
- 💾 Model serialization using Joblib.
- 🎨 Responsive frontend built with HTML, CSS, and JavaScript.
- 🌐 Frontend and backend served through a single Render web service.

## 🛠️ Tech Stack

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib

### Backend
- FastAPI
- Uvicorn
- Pydantic

### Frontend
- HTML
- CSS
- JavaScript

### Development and Deployment
- Google Colab
- VS Code
- Git and GitHub
- Render

## 📊 Input Features

| Feature | Description |
|---|---|
| Age | User's age |
| Gender | User's gender |
| Country | User's country |
| Academic Level | Current academic level |
| Most Used Platform | Most frequently used social media platform |
| Purpose of Use | Main purpose of social media usage |
| Average Daily Usage | Average daily social media usage in hours |
| Daily Unlocks | Number of phone unlocks per day |
| Study Hours | Average study hours per day |
| Physical Activity | Average physical activity hours per day |
| Sleep Hours | Average sleep duration per night |
| Stress Level | Self-reported stress category |

## 🧠 Machine Learning Pipeline

The final model uses a Random Forest Regressor.

```text
Dataset
   ↓
Data Preprocessing
   ↓
Feature Transformation
   ↓
Train-Test Split
   ↓
Model Training and Evaluation
   ↓
Save Trained Model (.pkl)
   ↓
FastAPI Prediction Endpoint
   ↓
Predicted Mental Health Score
```

### Model Details

| Property | Details |
|---|---|
| Model | Random Forest Regressor |
| Task | Regression |
| Target | Mental Health Score |
| Training Library | Scikit-learn |
| Model Serialization | Joblib |
| Saved Model | `Mental_Health_Pred_Model.pkl` |

### Model Selection

During development, the following approaches were explored:

- Linear Regression
- Random Forest Regressor
- Random Forest with hyperparameter tuning using `RandomizedSearchCV`

The standard Random Forest Regressor was selected as the final model based on the evaluation performed during development.

## 🏗️ Project Architecture

The application follows a **Frontend → Backend → Machine Learning Model** architecture.

```text
User
  ↓
HTML / CSS / JavaScript Frontend
  ↓
JSON Request
  ↓
FastAPI /predict Endpoint
  ↓
Input Validation with Pydantic
  ↓
Trained Random Forest Model
  ↓
Predicted Mental Health Score
  ↓
JSON Response
  ↓
Frontend Displays Prediction
```

The frontend sends input data to the backend using JavaScript's `fetch()` API. FastAPI validates the request, passes the input to the trained model, and returns the prediction.

## 📁 Project Structure

```text
Mental-Health-Score-Predictor/
│
├── ai_model/
│   └── Mental_Health_Pred_Model.pkl
│
├── backend/
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── requirements.txt
└── README.md
```

*Note: The structure above reflects the current frontend/backend deployment. Adjust the model path or additional folders if your repository uses different names.*

## ⚡ API Endpoint

### `POST /predict`

Accepts user demographic, digital behaviour, academic, and lifestyle information and returns a predicted mental health score.

**Example response:**

```json
{
  "predicted_mental_health_score": 6.42
}
```

The score above is illustrative and does not represent a verified prediction for any particular input.

### API Documentation

Interactive API documentation is available at:

[Swagger UI](https://mental-health-score-predictor-api.onrender.com/docs)

## 🚀 Deployment

The application is deployed on Render as a **single web service**.

The FastAPI application serves both the static frontend files and the prediction API.

```text
                  Render
                    │
                    ▼
            FastAPI Application
               /       \
              /         \
             ▼           ▼
       Frontend       /predict
    HTML/CSS/JS          │
                         ▼
                 Input Validation
                         │
                         ▼
                 Trained ML Model
                         │
                         ▼
                  JSON Prediction
                         │
                         ▼
                 Frontend Result
```

This architecture eliminates the need for a separate Streamlit frontend service.

## 📚 Data Attribution

The dataset used for training and evaluating the model was obtained from Kaggle.

It contains information relating to demographic characteristics, social media usage, academic routine, physical activity, sleep patterns, stress levels, and mental health scores.

**Dataset source:** Kaggle — *Mental Health and Social Media Dataset*.

Please consult the original dataset page for licensing, usage conditions, and attribution requirements.

## ⚠️ Disclaimer

This project is intended solely for educational and demonstration purposes.

The predicted score is generated by a machine learning model and should not be interpreted as a medical diagnosis, validated clinical assessment, or professional mental health advice.

The model's predictions may be affected by dataset limitations, bias, and generalization errors. Consult a qualified healthcare or mental health professional for actual health concerns.

## 🔮 Future Improvements

- Improve model performance using larger and more diverse datasets.
- Add model explainability and feature importance.
- Introduce prediction history.
- Strengthen input validation and API security.
- Implement automated model retraining.
- Add data visualizations and model performance metrics.
- Improve deployment monitoring and scalability.
