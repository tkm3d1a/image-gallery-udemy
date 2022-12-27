# save this as app.py
import os
import requests
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from mongo_client import mongo_client

gallery_db = mongo_client.gallery
image_collection = gallery_db.images

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random/"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNSPLASH_KEY:
    raise EnvironmentError(
        "Please create/add the UnsplashAPI key to the .env.local file in the root directory"
    )

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG

TIMEOUT = 10


@app.route("/")
def home():
    """base '/' route for debugging"""
    return "You are on the home page, check the url"


@app.route("/new-image")
def new_image():
    """
    endpoint for adding new images to front end
    Methods: GET
    """
    word = request.args.get("query")
    # return {"word": word}
    headers = {"Accept-Version": "v1", "Authorization": "Client-ID " + UNSPLASH_KEY}

    params = {"query": word}

    response = requests.get(
        url=UNSPLASH_URL, headers=headers, params=params, timeout=TIMEOUT
    )
    data = response.json()
    return data


@app.route("/images", methods=["GET", "POST"])  # type: ignore
def images():
    """
    Images handler function
    Methods: GET, POST
    """
    if request.method == "GET":
        # read images from db
        images_found = image_collection.find({})
        return list(images_found)

    if request.method == "POST":
        # save image to db
        image_post = request.get_json()
        get_id = image_post.get("id")  # TODO need to fix possible error?
        image_post["_id"] = get_id  # TODO need to fix possible error?
        result = image_collection.insert_one(image_post)
        inserted_id = result.inserted_id
        return {"inserted_id": inserted_id}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
