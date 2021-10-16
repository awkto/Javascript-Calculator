// Declare a constant variable for input field
const inputField = document.getElementById('input');

// Adding numbers or digits based on button presses
const insertNum = num => inputField.textContent += num;

// Evaluation function (equal sign)
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

// Backspace / Delete function to 
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

// Clear functionality, clear all input
const clearInput = () => inputField.textContent = '';