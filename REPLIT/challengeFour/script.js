// The fetch call to the specified endpoint is already defined in the JS file, finish coding the necessary promise resolvers for your fetch to access character information from the API. Once you are seeing character information in the console, utilize the display function that eventually work to display the images you retrieve from the fetch. Specific jsonified data from the API will need to be passed to this function.

// Inside the display function you will need to:

// Define two parameters that will hold the url's you retrieved from the json data.
// Grab each image element from the index.html file, and set the src to be the image link you stored in the parameters during step 1.
// After you successfully display two images in the DOM, use the attached style.css file to style each image with the following properties:

let imgOne = document.getElementById('imageOne');
let imgTwo = document.getElementById('imageTwo')
 

fetch('https://rickandmortyapi.com/api/character/')  //grab data
.then(function(result){ //take data to result variable
    return result.json(); //data is jsonified
}) 
.then(function(json){  //what do we want to do? pass it off to a function? 
   display(json.results[0].image, json.results[1].image);
})

const display = (param1, param2) => {
    imgOne.src = param1;
    imgTwo.src = param2;
}

   

