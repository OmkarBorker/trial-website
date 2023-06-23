from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Handle the POST request here
        # You can access the request data using request.json or request.form
        # Perform login logic and return the appropriate response
        return jsonify({'token': 'test123'})
    else:
        # Handle the GET request here
        return jsonify({'message': 'Please use POST method to login.'})

if __name__ == '__main__':
    app.run(host='localhost', port=8080)
