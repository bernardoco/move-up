<p align="center">
  <img src="https://github.com/bernardoco/move-up/blob/master/frontend/public/moveup-logo.png" alt="logo">
</p>

# Move Up

This is a project for the Advanced Programming discipline at the Federal University of Rio de Janeiro (UFRJ).
Move Up is a platform to find and schedule group sports activities. The intended final product could have a matchmaking system for pairing players in a soccer match, for example. This project was developed using the MERN stack (MongoDB, Express, React, Node).
For now, this application is capable of:
* Create an Event
* Delete an existing Event
* Sign in for an Event increasing the number of players

## Getting Started
Clone this repository
```
git clone https://github.com/bernardoco/move-up
```
Install dependencies and run server
```
cd ./backend
npm install
node index.js
```
Install dependencies and run client
```
cd ./frontned
npm install
npm start
```
Open in browser
```
localhost:3000
```

## Building the Docker Images
Build server image
```
cd ./backend
docker build -t api-server .
```
Build client image
```
cd ./frontend
docker build -t react-app .
```
Run images
```
docker run -p 5000:5000 api-server
docker run -p 80:80 react-app
```
Open in browser
```
localhost
```
