#  TweetSense — Disaster Tweet Classifier

A full stack NLP application that classifies tweets as disaster-related or not using a fine-tuned DistilBERT model.


##  Tech Stack
- **Frontend:** React + Vite + Tailwind CSS + Recharts
- **Backend:** FastAPI + Python
- **Model:** DistilBERT fine-tuned on Kaggle Disaster Tweets
- **Accuracy:** ~84% on validation set

##  Features
- Real-time tweet classification
- Confidence score with progress bar
- Dashboard with prediction distribution pie chart
- Recent predictions history
- Stats — total predictions, disaster count, avg confidence

##  Project Structure
disaster-tweet-classifier/
├── backend/          # FastAPI backend
├── frontend/         # React frontend
├── model_training/   # Colab training notebook
└── README.md

##  How to run locally

### Backend
    bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

### Frontend
    bash
cd frontend
npm install
npm run dev


Open http://localhost:5173

##  Model Details
- Base model: distilbert-base-uncased
- Dataset: Kaggle NLP Getting Started (7,613 tweets)
- Training: 3 epochs, batch size 16
- Validation accuracy: 84%
- Validation F1: 84%