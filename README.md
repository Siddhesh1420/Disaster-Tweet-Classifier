#  TweetSense — Disaster Tweet Classifier

A full-stack NLP app that classifies tweets as **disaster-related or not** using a fine-tuned DistilBERT model.

---

##  Tech Stack
- **Frontend:** React + Vite + Tailwind CSS + Recharts
- **Backend:** FastAPI + Python
- **Model:** DistilBERT fine-tuned on Kaggle Disaster Tweets (Colab T4 GPU)
- **Model hosted on:** [Hugging Face](https://huggingface.co/Sid1409/disaster-tweet-classifier)

---

##  Features
- Real-time tweet classification with confidence score
- Dashboard with pie chart and prediction history
- Stats — total predictions, disaster count, avg confidence

---

## Project Structure
```
disaster-tweet-classifier/
├── backend/         # FastAPI backend
├── frontend/        # React frontend
├── notebook/        # Fine-tuning notebook (Colab T4) + train.csv
└── README.md
```
---

##  Run Locally

### Backend
``` bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
---

### Frontend
``` bash
cd frontend
npm install
npm run dev
```
---

### Notebook
Open `notebook/Project.ipynb` in Google Colab, set runtime to **T4 GPU**, upload `train.csv` and run all cells.

---

##  Model
- Base: `distilbert-base-uncased`
- Dataset: 7,613 tweets (Kaggle NLP Getting Started)
- Validation Accuracy: ~84% | F1: ~84%