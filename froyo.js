// Welcome to the froyo code space. 


// Promt User to input a seprated amount of flavors seperating using commas.

const userInput = prompt("Enter a list of froyo flavors seperated by commas!");
// "Vanilla", "Vanilla","Vanilla", "Strawberry", "Coffee" "Coffee". 

// Split falvors into array of flavors. 

const flavorsArray = userInput.split(",");

// Create object that will count each flavor. 

const flavorCount = {};
flavorsArray.forEach(flavor=> {;
flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
});
console.log("Flavor Count:", flavorCount);