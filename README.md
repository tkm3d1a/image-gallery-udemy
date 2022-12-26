# Full Stack Practice

## About

This is my documentation as I follow a Udemy Tutorial on building a full stack web application. I use Documentation here pretty loosely as I may or may not add anything more offical as I get farther along.  currently it will be mostly just a sor tof snip of notes as I continue on building.

The intent behind this is not to build some MVP to show off, but I am attempting to document my learning process a bit better, and show how I progress as I go farther along.

Once a "stage" is complete, I don't intend to go back and refactor anything, but may stylistcly update as I get further along.  My end goal is to be able to deploy this fully hosted using something like GCP or Azure.  That will be another event in and of it self though, so for now, I live on localhost...

- [x] Stage 1
    - React/Front end building blocks
- [x] Stage 2
    - Python/API service building blocks
- [ ] Stage 3
    - MongoDB database building blocks
    - Dockerization?
- [ ] Stage 4
    - Cleanup/refinement?
    - Additional features?
- [ ] Stage 5
    - Custom deployment (above and beyond course?)

## Stage 1 (React)

Stage 1 complete (10/01/2022):
- built front end app
- utilizes Unsplash api
- no current db or backend
- no security for key (cannot build/deploy publicly until secured)
- built using react-bootstrap
- practice with react components
- all current code contained in [FrontEnd](./frontend/) folder

## Stage 2 (Python/flask API)

Stage 2 complete (12/24/2022):
- Added api microservice for image requests
    - Built using flask and requests
    - utilized pipenv to virtualize environment
- tested and worked with postman to verify
- added cors to API to allow for local dev to work correctly
- still no DB integration currently
- api code and information in [API](./api/) folder
- some frontend code changed to talk to new API service
    - local environment variables and small code change in app.js
    - no major layout or other changes currently

Worklog:
_12-24-22_
- Began integration of front end with self made API
- Tested throughout with Postman
- Added CORS to API app to allow cross origin requests
- Integrated Python linter and autoformats
- Have full new-image request implemented

_12-11-22_
- Started up again with new branch
- set up python environment using pipenv
    - new process compared to python built in venv setup
    - adds pipfile and lock file to recreate easier
    - will need to add info on how to recreate/add later
    - tested pipenv running of flask app


## Stage 3 (Docker/DB integration)

Worklog:
_12/26/22_
- Dockerized api services
    - first `Dockerfile` basics covered
- Dockerized front end service
- Set up and learned docker-compose.yml basics
- Still having eslint .cache access issue, but it does not stop running of containers
    - have found few stackoverflow issues matching this, but no solution yet
    - might need to test in different environments?
- Docker-compose set up to work correctly-ish

## Stage 4 (Dockerizing?)