# TweetSense - Disaster Tweet Classifier

A full-stack NLP application that classifies tweets as Disaster or Non-Disaster using a fine-tuned DistilBERT model.

---

## Overview

TweetSense leverages Transformer-based Natural Language Processing to analyze tweet content and determine whether a tweet refers to a real disaster event. The application provides real-time predictions, confidence scores, analytics, and an interactive dashboard.

---

🔗 **Live Demo:** http://13.200.235.213

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Recharts

### Backend
- FastAPI
- Python

### Machine Learning
- DistilBERT
- Hugging Face Transformers
- PyTorch

### Deployment
- Docker
- Docker Compose
- Docker Hub

### Model Hosting
- Hugging Face Hub

Model Repository:

https://huggingface.co/Sid1409/disaster-tweet-classifier

---

## Features

- Real-time disaster tweet classification
- Confidence score prediction
- Interactive analytics dashboard
- Prediction history tracking
- Pie-chart visualization
- REST API backend
- Containerized deployment using Docker
- AWS EC2 (deployed via Docker + EC2 t3.micro)

---

## Project Structure

```text
disaster-tweet-classifier/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── notebook/
│   ├── Project.ipynb
│   └── train.csv
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## Model Information

### Base Model
- distilbert-base-uncased

### Dataset
- Kaggle NLP Getting Started Disaster Tweets Dataset
- 7,613 labeled tweets

### Training Environment
- Google Colab
- NVIDIA T4 GPU

### Performance
- Validation Accuracy: ~84%
- F1 Score: ~84%

---

## Running Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

Swagger Docs:

```text
http://localhost:8000/docs
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Docker Deployment

### Build and Start Containers

```bash
docker compose up --build
```

### Run in Detached Mode

```bash
docker compose up -d
```

### Stop Containers

```bash
docker compose down
```

### View Running Containers

```bash
docker ps
```

### View Logs

```bash
docker compose logs -f
```

---

## Architecture

```text
React Frontend
       |
       v
FastAPI Backend
       |
       v
DistilBERT Model
       |
       v
Prediction Output
```

---

## Docker Hub Images

### Backend

```bash
docker pull siddhesh1420/disaster-tweet-backend:latest
```

### Frontend

```bash
docker pull siddhesh1420/disaster-tweet-frontend:latest
```

---

## API Endpoint

### POST /predict

Request

```json
{
  "text": "Massive wildfire spreading across the city."
}
```

Response

```json
{
  "prediction": "Disaster",
  "confidence": 0.94
}
```

---

## Key Learning Outcomes

- Transformer-based NLP
- Fine-tuning DistilBERT
- FastAPI development
- Frontend-Backend integration
- Docker containerization
- Docker Compose orchestration
- Model deployment workflows
- REST API design

---

## Future Improvements

- GitHub Actions CI/CD
- User Authentication
- Batch Tweet Analysis
- Real-Time Social Media Stream Integration
- Explainable AI Visualizations

---

## Author

Siddhesh

B.Tech. Data Science and Artificial Intelligence  
Indian Institute of Technology Bhilai