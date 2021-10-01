let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];

let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
};

//use array destructuring to assign each array within the shoppingList array its own variable.
const [grocery, cleaning, gifts, clothing] = shoppingList
// console.log(shoppingList);

//Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array.

const shoppingListArray = [...grocery, ...cleaning, ...gifts, ...clothing];
// console.log(shoppingListArray);

/*
after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:
    -include a parameter for index
    -utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
    -you will need to implement some sort of logic to check the index of the current item
*/

// array.map(function(currentValue, index, arr), thisValue) 

shoppingListArray.map(function(list, index){
    // console.log(list, index)
    if (index <= 2){
        obj.grocery.push(list);
    } else if(index >= 3 && index <= 5){
        obj.cleaning.push(list);
    } else if(index >= 6 && index <= 8){
        obj.gifts.push(list);
    } else{
        obj.clothing.push(list);
    }
    
}); 
console.log(obj)


