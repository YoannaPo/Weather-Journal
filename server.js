

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Dependencies
const bodyParser = require('body-parser')

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
//to connect the app to the 'cors' package
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//set variable 

