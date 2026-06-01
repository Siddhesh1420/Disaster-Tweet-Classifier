from transformers import pipeline

classifier = None

def load_model():
    global classifier
    if classifier is None:
        print("Loading model from Hugging Face...")
        classifier = pipeline(
            "text-classification",
            model="Sid1409/disaster-tweet-classifier"
        )
        print("Model loaded successfully!")
    return classifier


def predict(text: str):
    clf = load_model()
    result = clf(text)[0]

    label = 'Disaster' if result['label'] == 'LABEL_1' else 'Not Disaster'
    confidence = round(result['score'], 4)

    return {
        'tweet': text,
        'label': label,
        'confidence': confidence
    }