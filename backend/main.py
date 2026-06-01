from fastapi import FastAPI
from schemas import TweetInput, PredictionOutput
from model import predict
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI(
    title="TweetSense - Disaster Tweet Classifier",
    description="Classifies tweets as disaster-related or not using fine-tuned DistilBERT",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

history=[]

@app.get("/health")
def health_check():
    return {"status":"ok"}

@app.post("/predict")
def predict_tweet(input:TweetInput)->PredictionOutput:
    result=predict(input.text)
    result['timestamp']=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    history.append(result)
    return PredictionOutput(**result)

@app.get("/history")
def get_history():
    return history[-20:]