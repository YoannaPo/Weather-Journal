

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
const port = 8000;

//this code would you add above the callback function to successfully initiate a server named server
const server = app.listen(port, listening);

//listening function - callback to debug
function listening(){
    console.log('server running');

    //template string
    console.log(`running on localhost: ${port}`);
}   

//GET - add a GET route - this should return the propjectData (object in your server code)
app.get('/all', getWeatherInfo);

function getWeatherInfo(req, res){
    res.json(projectData);
}
//POST - add a POST route - this should add incoming data to projectData
app.post('/add', addUsersInfo);

function addUsersInfo (req, res){
    projectData = {
        date: req.body.date,
        temp: req.body.temp,
        userResponse: req.body.userResponse
    }
    res.send(projectData);
    console.log(projectData);
}


