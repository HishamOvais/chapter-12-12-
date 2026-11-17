    // ASSIGNMENT 8–11: USER INPUT, CONCATENATING STRINGS & IF STATEMENTS
// Run each question separately. prompt() takes input; alert() displays a message.

// Question 1: Take the user's name and greet the user.
var userName = prompt("Enter your name:");
alert("Hello " + userName + "!");

// Question 2: Take a number and display its multiplication table.
// If the user enters nothing, display the table of 5.
var inputNumber = prompt("Enter a number:", "5");
var tableNo = inputNumber === "" ? 5 : Number(inputNumber);
document.write("Multiplication table of " + tableNo);
for (var i = 1; i <= 10; i++) {
    document.write("<br>" + tableNo + " x " + i + " = " + (tableNo * i));
}

// Question 3: If the entered city is Karachi, welcome the user to the city of lights.
var city = prompt("Enter your city:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// Question 4: Take gender and display the appropriate morning greeting.
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
}

// Question 5: Take traffic signal color and display its message.
var signalColor = prompt("Enter traffic signal color (red, yellow, green):");
if (signalColor.toLowerCase() === "red") {
    alert("Vehicles must stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Vehicles should get ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Vehicles can move now");
} else {
    alert("Invalid signal color");
}

// Question 6: Take maximum age and current age. If current age is not above max age, welcome the user.
var maxAge = Number(prompt("Enter maximum age:"));
var currentAge = Number(prompt("Enter current age:"));
if (currentAge <= maxAge) {
    alert("You are welcome");
}

// Question 7: Ask remaining fuel. If it is less than 0.25 litres, ask the user to refill.
var remainingFuel = Number(prompt("Enter remaining fuel in litres:"));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Question 8: Check the given scripts and identify which alert messages are displayed.
// a.
var a = 4;
if (++a === 5) {
    console.log("a: given condition for variable a is true"); // Displayed
}
// b.
var b = 82;
if (b++ === 83) {
    console.log("b: given condition for variable b is true"); // Not displayed
}
// c.
var c = 12;
if (c++ === 13) {
    console.log("condition 1 is true"); // Not displayed
}
if (c === 13) {
    console.log("condition 2 is true"); // Displayed
}
if (++c < 14) {
    console.log("condition 3 is true"); // Not displayed
}
if (c === 14) {
    console.log("condition 4 is true"); // Displayed
}
// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    console.log("The cost equals"); // Displayed
}
// e.
if (true) {
    console.log("True"); // Displayed
}
if (false) {
    console.log("False"); // Not displayed
}
// f.
if ("car" < "cat") {
    console.log("car is smaller than cat"); // Displayed
}

// Question 9: Take marks in three subjects and total marks. Calculate percentage, grade and remarks.
var subject1 = Number(prompt("Enter marks for subject 1:"));
var subject2 = Number(prompt("Enter marks for subject 2:"));
var subject3 = Number(prompt("Enter marks for subject 3:"));
var totalMarks = Number(prompt("Enter total marks:"));
var marksObtained = subject1 + subject2 + subject3;
var percentage = (marksObtained / totalMarks) * 100;
var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
document.write("Total marks: " + totalMarks);
document.write("<br>Marks obtained: " + marksObtained);
document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);

// Question 10: Take shopping details. Give 10% discount if total cost is above 2000 PKR.
var item1Name = prompt("Enter name of item 1:");
var item2Name = prompt("Enter name of item 2:");
var item1Price = Number(prompt("Enter price of item 1:"));
var item2Price = Number(prompt("Enter price of item 2:"));
var item1Quantity = Number(prompt("Enter quantity of item 1:"));
var item2Quantity = Number(prompt("Enter quantity of item 2:"));
var shipping = Number(prompt("Enter shipping charges:"));
var cartTotal = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shipping;
var discount = cartTotal > 2000 ? cartTotal * 0.10 : 0;
var payable = cartTotal - discount;
document.write("Shopping Cart Receipt");
document.write("<br>" + item1Name + ": " + item1Price + " x " + item1Quantity);
document.write("<br>" + item2Name + ": " + item2Price + " x " + item2Quantity);
document.write("<br>Shipping charges: " + shipping);
document.write("<br>Total: " + cartTotal + " PKR");
document.write("<br>Discount: " + discount + " PKR");
document.write("<br>Net payable: " + payable + " PKR");

// Question 11: Guess the secret number from 1 to 10.
var secretNumber = 7;
var guess = Number(prompt("Guess the secret number (1 to 10):"));
if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

// Question 12: Check whether a number is divisible by 3.
var divisibleNumber = Number(prompt("Enter a number:"));
if (divisibleNumber % 3 === 0) {
    alert("The number is divisible by 3");
}

// Question 13: Take team names and scores. Display the winner or a tie.
var teamA = prompt("Enter Team A name:");
var scoreA = Number(prompt("Enter Team A score:"));
var teamB = prompt("Enter Team B name:");
var scoreB = Number(prompt("Enter Team B score:"));
if (scoreA > scoreB) {
    alert(teamA + " have won the game");
} else if (scoreB > scoreA) {
    alert(teamB + " have won the game");
} else {
    alert("The game is a tie");
}

// Question 14: Check and display the type of a string, number and Boolean.
var stringValue = "Pakistan";
var numberValue = 92;
var booleanValue = true;
if (typeof stringValue === "string") {
    alert(stringValue + " is a string");
}
if (typeof numberValue === "number") {
    alert(numberValue + " is a number");
}
if (typeof booleanValue === "boolean") {
    alert(booleanValue + " is a Boolean");
}

// Question 15: Check whether the input number is even or odd.
var evenOddNumber = Number(prompt("Enter a number:"));
if (evenOddNumber % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

// Question 16: Take temperature and display the weather message.
var temperature = Number(prompt("Enter temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("The weather is very cold.");
}

// Question 17: Create a calculator using if statements.
var firstNumber = Number(prompt("Enter first number:"));
var secondNumber = Number(prompt("Enter second number:"));
var operator = prompt("Enter operation (+, -, *, /, %):");
var answer;
if (operator === "+") {
    answer = firstNumber + secondNumber;
} else if (operator === "-") {
    answer = firstNumber - secondNumber;
} else if (operator === "*") {
    answer = firstNumber * secondNumber;
} else if (operator === "/") {
    answer = secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by zero";
} else if (operator === "%") {
    answer = secondNumber !== 0 ? firstNumber % secondNumber : "Cannot divide by zero";
} else {
    answer = "Invalid operator";
}
alert("Result: " + answer);

// Question 18: Take day name and identify weekday, weekend or holiday.
var day = prompt("Enter day name:");
var dayLower = day.toLowerCase();
if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(dayLower)) {
    alert("It’s a week day");
} else if (dayLower === "saturday") {
    alert("It’s weekend");
} else if (dayLower === "sunday") {
    alert("Yay! It’s a holiday");
} else {
    alert("Invalid day");
}

// Question 19: Take score. Above 50 means passed.
var score = Number(prompt("Enter your score:"));
if (score > 50) {
    alert("You are passed");
} else {
    alert("Try again!");
}

// Question 20: Take two numbers. Display the greater number or state that they are equal.
var numberA = Number(prompt("Enter first number:"));
var numberB = Number(prompt("Enter second number:"));
if (numberA > numberB) {
    alert("The greater number of " + numberA + " and " + numberB + " is " + numberA + ".");
} else if (numberB > numberA) {
    alert("The greater number of " + numberA + " and " + numberB + " is " + numberB + ".");
} else {
    alert("Both numbers are equal.");
}

// Question 21: Translate "Hello, World" into at least three languages; default to English.
var languageCode = prompt("Enter language code (es, de, ur, en):");
var greeting;
if (languageCode === "es") {   // Spanish
    greeting = "Hola, Mundo";
} else if (languageCode === "de") {
    greeting = "Hallo, Welt";       // German
} else if (languageCode === "ur") {
    greeting = "salam";
} else {
    greeting = "Hello, World";
}
alert(greeting);

// Question 22: Check whether the entered number is positive or negative.
var signedNumber = Number(prompt("Enter a number:"));
if (signedNumber > 0) {
    alert("The number is positive");
} else if (signedNumber < 0) {
    alert("The number is negative");
} else {
    alert("The number is zero");
}

// Question 23: Pluralize a noun according to the number.
var noun = prompt("Enter a noun (singular):");
var quantity = Number(prompt("Enter a number:"));
var pluralNoun = quantity === 1 ? noun : noun + "s";
alert(quantity + " " + pluralNoun);
