// 1. Ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1.1 programatically subtracts first element value from last
let newAge = ages[ages.length - 1] - ages[0];
// test it
console.log(`Second age: ${newAge}`);

// 1.2 adds a new age and does the same thing to ensure it's dynamic
ages.push(100);
newAge = ages[ages.length - 1] - ages[0];
console.log(`Second age: ${newAge}`);

// 1.3 iterates through the array and calculates average age
let sum = 0;
for (age of ages){
    sum += age;
}
let average = sum / ages.length;
// log it
console.log(`Average age: ${average}`);

// 2. initialize names array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2.1 iterate through names and calc. average number of letters per name
let totLetters = 0;
for (n of names){
    totLetters += n.length;
}
let avgLetters = totLetters / names.length;
// log it
console.log(`Average number of letters: ${avgLetters}`);

// 2.2 iterate through names and concat. all names together, separated by spaces
let concatNames = "";
for (n of names){
    concatNames += `${n} `
}
// log it
console.log(`Concatenated names: ${concatNames}`);

// 3. access the last element in an array by using array.length - 1. for example:
let arr = [1, 2, 3, 4, 5];
console.log(`Last element: ${arr[arr.length - 1]}`);

// 4. access the first element in an arry by using array[0]. for example:
console.log(`First element: ${arr[0]}`);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
// log it
console.log(`Name lengths: ${nameLengths}`);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let nameLengthsSum = 0;
for (nl of nameLengths){
    nameLengthsSum += nl;
}
// log it
console.log(`Name lengths sum: ${nameLengthsSum}`);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatWords(word, n){
    let str = "";
    for (let i = 0; i < n; i++){
        str += word;
    }
    return str;
}
// test it
console.log(`Concatenation: ${concatWords('Hello', 3)}`);

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
const makeFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// test it
console.log(`Full name: ${makeFullName("Chris", "Smith")}`);

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isGreaterThan100(arr){
    let sum = 0;
    for (num of arr){
        sum += num;
    }
    // the return in the below if block will exit the function if it is hit. therefore there it is not necessary to include an else block specifically for the default return statement.
    if (sum > 100){
        return true;
    } 
    return false;
}
// test it
let arr1 = [1, 2, 3];
let arr2 = [100, 104, 108];
console.log(`Is array 1's sum greater than 100?: ${isGreaterThan100(arr1)}`);
console.log(`Is array 2's sum greater than 100?: ${isGreaterThan100(arr2)}`);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avgArray(arr){
    let sum = 0;
    for (num of arr){
        sum += num;
    }
    let avg = sum / arr.length;
    return avg;
}
// test it
console.log(`The average of array 1 is ${avgArray(arr1)}`);
console.log(`The average of array 2 is ${avgArray(arr2)}`);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareArrays(arr1, arr2){
    let avg1 = avgArray(arr1);
    let avg2 = avgArray(arr2);
    // checks array 1's average against array 2's average
    if (avg1 > avg2){
        return true;
    }
    return false;
}
// test it
console.log(`Is array 1's average greater than array 2's average?: ${compareArrays(arr1, arr2)}`);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    // checks for both conditions
    if (isHotOutside && (moneyInPocket > 10.50)){
        return true;
    }
    return false;
}

// test it
let isHotOutside = true;
let moneyInPocket = 11.00;
console.log(`Will you buy a drink?: ${willBuyDrink(isHotOutside, moneyInPocket)}`);

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// rolls a 6 - 20-sided die. created for personal use as i frequently roll dice (virtual or physical) when deciding something based on RNG (e.g., did my character connect their hit? did they luck out in a scenario? etc)
function rollDie(sides){
    if (sides < 6 || sides > 20){
        console.log(`Sides must be between 6 and 20. You chose ${sides}.`);
    }
    else {
        // Math.floor: rounds down and returns largest int <= to a number
        // Math.random: returns a float between 0 and 1
        // the below line of code takes the float, multiplies it by the sides, and rounds it down. add 1 to prevent 0 result. log it to the console.
        console.log(`You rolled a ${sides}-sided die and got a ${Math.floor(Math.random() * sides) + 1}!`);
    }
}

// test it
rollDie(2);
rollDie(50);
rollDie(20);

// 13a. a second custom function that's very similar in concept to the above, but returns a random number between two given numbers instead. used for deciding between a number of items.
function getInt(min, max){
    // rounds up and returns smallest integer <= min
    min = Math.ceil(min);
    // rounds down and returns largest int <= max
    max = Math.floor(max);
    // explained below the fn
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// roll the rng
let min = 3;
let max = 10;
console.log(`You chose an integer between ${min} and ${max} and got ${getInt(min, max)}!`);
// ^^^
// Math.random() gives a random float between 0 and 1
// We want a random number - int included
// So we multiply Math.random() by the result of the size of the range.
// e.g., a random number between 1 and 10 needs a multiply by 10, so the decimal becomes the int.
// we add 1 because the range given by the size is non-inclusive. this addition makes it inclusive.
// we add another min to shift the range to include the min value through the max value.