from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.json.get('username')
        password = request.json.get('password')

        if username == 'Omkar' and password == '123':
            return jsonify({'token': 'test123','username': username})
        else:
            return jsonify({'error': 'Invalid username or password.'}), 401

    else:
        # Handle the GET request here
        return jsonify({'message': 'Please use POST method to login.'})

if __name__ == '__main__':
    app.run(host='localhost', port=8080)
