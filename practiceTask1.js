// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.



const moneyIHave = 1000;
const orangePrice = 300;
const applePrice = 200;
console.log("I have " + moneyIHave + " Taka ");

console.log("Orange 1kg price is " + orangePrice + " Taka");

console.log("Apple 1kg price is " + applePrice + " Taka ");

const totalPrice = orangePrice + applePrice;
console.log("Total price of 1kg Orange and 1kg Apple is " + totalPrice + " Taka");

const shopKeeperWillReturnMyChange = moneyIHave - totalPrice;
console.log("Shopkeeper will return my change: " + shopKeeperWillReturnMyChange + " Taka"); 
