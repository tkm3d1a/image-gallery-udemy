# Full Stack Practice

## About

This is my documentation as I follow a Udemy Tutorial on building a full stack web application. I use Documentation here pretty loosely as I may or may not add anything more offical as I get farther along.  currently it will be mostly just a sor tof snip of notes as I continue on building.

The intent behind this is not to build some MVP to show off, but I am attempting to document my learning process a bit better, and show how I progress as I go farther along.

Once a "stage" is complete, I don't intend to go back and refactor anything, but may stylistcly update as I get further along.  My end goal is to be able to deploy this fully hosted using something like GCP or Azure.  That will be another event in and of it self though, so for now, I live on localhost...

- [x] Stage 1
    - React/Front end building blocks
- [x] Stage 2
    - Python/API service building blocks
- [x] Stage 3
    - MongoDB database building blocks
    - Dockerization
    - Work on persistent db volumes
- [ ] Stage 4
    - saving images
    - deleting images
    - displaying saved images
    - final clean up
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

Stage 3 complete (12/27/2022):
- All services dockerized
    - 4 containers used:
        - api
        - frontend
        - mongo
        - mongo-express
- No containers pushed public
    - still need to identify proper security for this
    - possible key and db exposure?

Worklog:

_12/27/22_
- worked on updating wsl configs to fix issue with docker consuming resources
- more familiarity with updating code and restarting/rebuilding docker containers
- began work on next stage while working with entire web app running in docker container(s)
- added save functionality to api service
    - hides save button once an image is marked as saved in the DB
    - prevents error with trying to save same image multiple times
    - discovered error on reload when searching for string that returns no images
        - need to tackle this in stage 5

_12/26/22_
- Dockerized api services
    - first `Dockerfile` basics covered
- Dockerized front end service
- Set up and learned docker-compose.yml basics
- Still having eslint .cache access issue, but it does not stop running of containers
    - have found few stackoverflow issues matching this, but no solution yet
    - might need to test in different environments?
- Docker-compose set up to work correctly-ish

## Stage 4 (Fianl additions)

Worklog:

_12/29/22_
- Started work on adding spinner component to main page for bad network situations
    - Have new component set up, and alignment worked out
    - not implemented based on network response times yet
        - need to figure out how to have it go up once the image request is made?
        - need to identify where this can be pulled from
- updated dockerfile for frontend to fix eslint cache permissons error

_12/28/22_
- Added images/\<id> route to handle rdeleting images
    - tested workign with postman on localhost
- Added front end update to actually remove image and refresh once done
    - can delete both saved and unsaved images currently without errors
    - verified page updates correctly