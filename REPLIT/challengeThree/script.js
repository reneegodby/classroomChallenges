//CHALLENGE, ASYNC/AWAIT
// Here you have a function named retrieveLocation that takes in a location's id as the first argument (named id via the first parameter). Using this id that is received, craft a fetch using "await", retrieve the data from the body using "await", and return the location's name from the data.

// Please do not modify the HTML file or any lines in the JS file that state to not modify!

// Your challenge is as follows:

// Make the function "retrieveLocation" asynchronous.
// Use await to fetch a location using the id and base URL.
// Retrieve the data from the body using await.
// Return that location's name from the function.

const apiUrl = 'https://rickandmortyapi.com/api/location/';

// Please do not modify this code below
document.getElementById('getLocation').addEventListener('click',()=>{
  retrieveLocation(document.getElementById('locationId').value)
  .then(name=>{document.getElementById('locationName').innerHTML=name;});
});

  //retrieveLocation is already set up
const retrieveLocation = async(id) => {
  await fetch(apiUrl + id)
  .then(function(result){
    return result.json();
  })
  .then(function(json){
    console.log(json)
    name = json.name;
  }) 
    return name;
  
  } 

