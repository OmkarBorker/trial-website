from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

DB_URL = 'postgres://postgres:omkarborker1@localhost:5432/postgres?sslmode=prefer&connect_timeout=10'

def create_connection():
    conn = psycopg2.connect(DB_URL)
    return conn


def create_user(email, password, first_name, last_name):
    conn = create_connection()
    cur = conn.cursor()

    try:
        # Insert user data into the table
        sql = f"INSERT INTO \"User\" (email, password, FirstName, LastName) VALUES (%s, %s, %s, %s)"
        values = (email, password, first_name, last_name)
        cur.execute(sql, values)

        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        print("Error creating user:", str(e))
        raise
    
@app.route('/')
def check_connection():
    try:
        conn = create_connection()
        return jsonify({'status': 'Database connection successful.'})
    except Exception as e:
        response = jsonify({'error': 'Failed to connect to the database.', 'details': str(e)})
        response.status_code = 500
        return response

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    conn = create_connection()
    cur = conn.cursor()
    try:

        sql = "SELECT * FROM \"User\" WHERE email = %s"
        cur.execute(sql, (username,))
        user = cur.fetchone()

        if user and user[1] == password:
            return jsonify({'token': 'test123', 'username': username})
        else:
            response = jsonify({'error': 'Incorrect username or password.'})
            response.status_code = 401
            return response

    except Exception as e:
        return jsonify({'error': 'Login failed.', 'details': str(e)}), 500

@app.route('/create-user', methods=['POST'])
def handle_create_user():
    email = request.json.get('email')
    password = request.json.get('password')
    first_name = request.json.get('firstName')
    last_name = request.json.get('lastName')

    # Logging the received payload
    print(f"Received payload: email={email}, password={password}, firstName={first_name}, lastName={last_name}")

    try:
        create_user(email, password, first_name, last_name)
        return jsonify({'token': 'test123', 'username': email, 'message': 'User created successfully'})
    except Exception as e:
        response = jsonify({'error': 'Failed to create user.', 'details': str(e)})
        response.status_code = 500
        return response

if __name__ == '__main__':
    app.run(host='localhost', port=8080)
