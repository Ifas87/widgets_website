from cgitb import text
import json
from channels.generic.websocket import WebsocketConsumer

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.send(text_data=json.dumps({
            'type':'connection_established',
            'message': 'Hello World'
        }))
    
    def receive(self, text_data):
        jsons = json.loads(text_data)
        print(jsons['message'])

        self.send(text_data=json.dumps({
            'type':'chat',
            "message":jsons['message']
        }))