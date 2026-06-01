from pydantic import BaseModel, Field

class TweetInput(BaseModel):
    text: str =Field(..., description="The text of the tweet to be analyzed.")
    
class PredictionOutput(BaseModel):
    tweet: str=Field(..., description="The original tweet text.")
    label: str=Field(...,description="The predicted label for the tweet , either 'Disaster' or 'Not Disaster'.") 
    confidence: float=Field(...,description="The confidence score of the prediction, ranging from 0 to 100.")
    timestamp: str=Field(..., description="Time of prediction")