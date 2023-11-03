from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Custom CORS middleware to handle OPTIONS requests globally
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')  # You can specify the allowed origins instead of '*'
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    return response

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017")  # Update with your MongoDB connection string
db = client["mydatabase"]  # Replace with your database name
collection = db["firstcollection"]  # Replace with your collection name

@app.route('/sign', methods=['GET', 'POST'])
def sign():
    if request.method == 'POST':
        data = request.get_json()
        collection.insert_one(data)
        return jsonify({"message": "Data added successfully"})
    elif request.method == 'GET':
        # Handle GET request logic here if needed
        # For example, return a form or some data
        return jsonify({"message": "GET request received"})

if __name__ == '__main__':
    app.run(debug=True)
