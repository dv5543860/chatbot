import requests  

def send_message_to_rasa(message):
    RASA_SERVER_URL = "https://myrasa-latest.onrender.com/webhooks/rest/webhook"
    payload = {
        "sender": "user",
        "message": message
    }
    response = requests.post(RASA_SERVER_URL, json=payload)
    return response.json()

