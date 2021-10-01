
let jsButton = document.getElementById("button");
jsButton.addEventListener("click", formSubmit);

function formSubmit(e) {
    e.preventDefault()      //makes the submit button not clear results immediately
    let firstInput = document.getElementById("numberEntry").value;
    let secondInput = document.getElementById("nameItem").value;
    let thirdInput = document.getElementById("brandItem").value;
    let writeSentence = document.getElementById("sentence");    

    writeSentence.textContent = `Customer is shopping for ${firstInput} ${thirdInput} ${secondInput}. `
     //difference between innerText and textContent    
}

