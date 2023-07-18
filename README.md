
# Wheather-Journal
> Simple App

## Table of contents
* [Introduction](#introduction)
* [Live](#live)
* [Installation](#installation)
* [Room for Improvement](#room-for-improvement)

## Introduction
<strong>An asynchronous web app that uses Web API and user data to dynamically update the UI.</strong>


## Installation 
This app runs on a Node.js environment, so ensure you have a Node installed on your machine. To do this, you can open the terminal, navigate to the project directory and run the command (by doing this, you will be able to check which version you have if so):
```bash
node -v
```

If you don't have Node.js installed, please follow the link with the instructions: 
[How to install Node.js](https://nodejs.dev/en/learn/how-to-install-nodejs/)

Then open the terminal. Once again navigate to project directory and run these commands:
```bash
  npm install body-parser
  npm install cors
  npm install express
```
or this use this one line command to install multiple npm packages
```bash
  npm install body-parser cors express
```

When everything is ready, start the server by running this command:
```bash
  node server.js
```
You can register and generate API  key through [https://openweathermap.org/](OpenWeather) website and update the API key on app.js file.
You get access the application through [http://localhost:8000](http://localhost:8000)

## Room for Improvement
[(Back to top)](#table-of-contents)
* secure API key 
<br>Please note that this app aims to learn how the API and client/server scripts work together. Because of the purpose of learning - the API key might be exposed on the client side. That's not recommended to do in a production environment.
More about recommended best practices:
https://developers.google.com/maps/api-security-best-practices


