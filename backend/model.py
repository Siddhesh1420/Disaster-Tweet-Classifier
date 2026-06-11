from transformers import pipeline, DistilBertForSequenceClassification, DistilBertTokenizerFast

print("Loading model from Hugging Face...")

tokenizer = DistilBertTokenizerFast.from_pretrained("Sid1409/disaster-tweet-classifier")
model = DistilBertForSequenceClassification.from_pretrained("Sid1409/disaster-tweet-classifier")

classifier = pipeline(
    "text-classification",
    model=model,
    tokenizer=tokenizer,
    device=-1
)

print("Model loaded successfully!")

def predict(text: str):
    result = classifier(text, truncation=True, max_length=128)[0]
    label = 'Disaster' if result['label'] == 'LABEL_1' else 'Not Disaster'
    confidence = round(result['score'], 4)
    return {'tweet': text, 'label': label, 'confidence': confidence}