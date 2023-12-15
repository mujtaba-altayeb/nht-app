from flask import Flask, request
import base64
import os
from PIL import Image
from io import BytesIO
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/save_image", methods=['POST'])
def save_image():
    data = request.json['data']
    base64_data = data.replace('data:image/jpeg;base64,', '')
    decoded_data = base64.b64decode(base64_data)
    img = Image.open(BytesIO(decoded_data))
    img.save(os.path.join('public', 'img/input_image.jpg'), 'JPEG')
    return {'status': 'success'}

if __name__=="__main__":
    app.run(debug=True, port=8080)