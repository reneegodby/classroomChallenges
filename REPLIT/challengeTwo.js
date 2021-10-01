const movieChallenge = {
    name: "The Usual Suspects",
    runTime: 106,
    genre: 'Action',
    characters: [{
            name: "Roger 'Verbal' Kint",
            age: 40,
            items: ["underdog", "smart", "quick thinking"]
        },
         {
            name: "Dean Keaton",
            age: 33,
            items: ["smart", "sarcasm", "gun"]
        }
    ] 
}

console.log(movieChallenge.name);
console.log(movieChallenge.characters[0].name)