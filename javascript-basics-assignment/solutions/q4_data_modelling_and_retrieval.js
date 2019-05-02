// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const fruits=[
                { name:"Orange",color:"Orange",pricePerKg:80},
                { name:"Apple",color:"Red",pricePerKg:110},
                { name:"Mango",color:"Yellow",pricePerKg:100},
                { name:"Grapes",color:"Black",pricePerKg:120},
                { name:"Watermelon",color:"Green",pricePerKg:40}            ]

let final = getFruits(fruits,'Grapes');
console.log(`You have passed the fruit "${final.name}": The colour of ${final.name} is ${final.color} and price is ${final.pricePerKg} per Kg.`);

function getFruits(passedFruits, fruiteName)
        {
            let fruitsMap = new Map();
            passedFruits.forEach(element =>{
                fruitsMap.set(element.name, element);
                });
    return  fruitsMap.get(fruiteName);
    //console.log(`You have passed the fruit "${fruiteName}" : The colour of ${fruiteName} is ${fruitsMap.get(fruiteName).color} and price is ${fruitsMap.get(fruiteName).pricePerKg} per Kg.`);
}