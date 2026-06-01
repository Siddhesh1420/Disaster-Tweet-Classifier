from transformers import pipeline

print("Loading model from Hugging Face...")
classifier=pipeline("text-classification",model="Sid1409/disaster-tweet-classifier")
print("Model loaded successfully!")

def predict(text:str):
    result=classifier(text)[0]
    label='Disaster' if result['label']=='LABEL_1' else 'Not Disaster'
    confidence=round(result['score'],4)
    return {'tweet':text, 'label':label, 'confidence':confidence}
