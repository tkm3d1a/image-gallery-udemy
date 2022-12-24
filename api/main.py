# save this as app.py
import os
import requests
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL="https://api.unsplash.com/photos/random/"
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", "")
DEBUG=bool(os.environ.get("DEBUG", True))

if not UNSPLASH_KEY:
    raise EnvironmentError("Please create/add the UnsplashAPI key to the .env.local file in the root directory")

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG


@app.route("/")
def home():
    return("You are on the home page, check the url")

@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }

    params = {
        "query": word
    }

    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data

if __name__ == "__main__":
    app.run(host = "0.0.0.0", port=5050)