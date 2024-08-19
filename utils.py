import requests

def send_message_to_rasa(message):
    url = "http://localhost:5005/webhooks/rest/webhook"
    payload = {
        "sender": "user",
        "message": message
    }
    response = requests.post(url, json=payload)
    return response.json()
