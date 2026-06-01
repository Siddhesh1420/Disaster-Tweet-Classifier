from transformers import pipeline

classifier = None

def get_classifier():
    global classifier

    if classifier is None:
        print("STEP 1: Starting model load")

        classifier = pipeline(
            "text-classification",
            model="Sid1409/disaster-tweet-classifier"
        )

        print("STEP 2: Model loaded")

    return classifier


def predict(text: str):
    print("STEP 3: Predict called")

    clf = get_classifier()

    print("STEP 4: Running inference")

    result = clf(text)[0]

    print("STEP 5: Inference complete")

    label = "Disaster" if result["label"] == "LABEL_1" else "Not Disaster"
    confidence = round(result["score"], 4)

    return {
        "tweet": text,
        "label": label,
        "confidence": confidence
    }