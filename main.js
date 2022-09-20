const prompt = require('prompt-sync')({sigint: true});

let colorCalculator = (prompt("Enter 1 to combine primary colors or 2 to deconstruct secondary colors."))

if (colorCalculator === '1')
{

let constructorOne = (prompt("What is your first color? "))
let constructorTwo = (prompt("What is your second color? "))

if (constructorOne === 'red' && constructorTwo === 'blue' ||
    constructorOne === 'blue' && constructorTwo === 'red'){
    console.log("red and blue make purple")
}else if(constructorOne === 'red' && constructorTwo === 'yellow' ||
        constructorOne === 'yellow' && constructorTwo === 'red'){
        console.log("red and yellow make orange")
}else if(constructorOne === 'blue' && constructorTwo === 'yellow' ||
        constructorOne === 'yellow' && constructorTwo === 'blue'){
        console.log("blue and yellow make green")
}else
    console.log("Error! Please enter valid primary color combination!")
}


if (colorCalculator === '2')
{

let deconstructor = (prompt("What color would you like to deconstruct? "))

if (deconstructor === "purple"){
    console.log("purple is a combination of red and blue")
}else if(deconstructor === "orange"){
    console.log("orange is a combination of red and yellow")
}else if(deconstructor === "green"){
    console.log("green is a combination of blue and yellow")
}else{
    console.log("Error! Please enter a valid secondary color!")
}
}
