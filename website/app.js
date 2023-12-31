
/* Global Variables */
const apiKey= '0e210c2325a6fe90f9e47d2a6b98c8c1&units=imperial';
//built in  API request by ZIP code - API call below
const basicUrl = (zipCode)  => {
    return `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`
};


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 + '.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener  --> add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', startThisEvent);

// Combine all
function startThisEvent(e){
    const usersFeelings = document.getElementById('feelings').value;
    const zipsLocations = document.getElementById('zip').value;

//Add function which gets  zip weather from API
    getZipWeatherFromApi(basicUrl(zipsLocations))
    .then(function(data){
        postData('/add', {date: newDate, temp: data.main.temp, userResponse: usersFeelings} )
     })
     .then(dynamicUpdateUI)
}

//POST for user input data
const postData =  async ( url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    //Important - body data type must match "Content-Type" header
    body: JSON.stringify(data),
 });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

//GET ZIP weather data from API
const getZipWeatherFromApi = async (url) =>{
    const res = await fetch(url);
    try {
        const weatherApiData = await res.json();
        //console.log(weatherApiData.main.temp);
        return weatherApiData;
        
    } catch (error) {
        console.log("error", error);   
    }
}

//Dynamically update UI
const dynamicUpdateUI = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    //Updated data to DOM elements
    document.getElementById('temp').innerText = Math.round(allData.temp)+ ' degrees';
    document.getElementById('content').innerText = allData.userResponse;
    document.getElementById("date").innerText =allData.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }







