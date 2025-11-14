"use strict";
const prompt = require("prompt-sync")({ sigint: true });

// User Input Handling
while (true) {
  function getValidNumberInput(promptMessage) {
    do {
      let inputNumber = prompt(promptMessage);
      const number = Number(inputNumber);
      if (!isNaN(number)) {
        return number;
      } else {
        console.log("Invalid, Input a valid number!");
      }
    } while (true);
  }

  function getValidOperatorInput(promptMessage) {
    do {
      let inputOperator = prompt(promptMessage);
      if (
        inputOperator === `+` ||
        inputOperator === `-` ||
        inputOperator === `*` ||
        inputOperator === `/` ||
        inputOperator === `%` ||
        inputOperator === `**`
      ) {
        return inputOperator;
      } else {
        console.log("Invalid, Input a valid operator");
      }
    } while (true);
  }

  let number1 = getValidNumberInput("Input Number 1 :");
  let operator1 = getValidOperatorInput("Input Operator : ");
  let number2 = getValidNumberInput("Input Number 2 :");
  // Basic Arithmetic Operation
  function add(number1, number2) {
    return number1 + number2;
  }

  function subtract(number1, number2) {
    return number1 - number2;
  }

  function multiply(number1, number2) {
    return number1 * number2;
  }

  function divide(number1, number2) {
    if (number2 === 0) {
      console.log("Error: Division by zero!");
      return null;
    } else {
      return number1 / number2;
    }
  }

  function modulo(number1, number2) {
    return number1 % number2;
  }

  function power(number1, number2) {
    return number1 ** number2;
  }

  // Main calculator
  let result;
  switch (operator1) {
    case `+`:
      result = add(number1, number2);
      break;
    case `-`:
      result = subtract(number1, number2);
      break;
    case `*`:
      result = multiply(number1, number2);
      break;
    case `/`:
      result = divide(number1, number2);
      break;
    case `%`:
      result = modulo(number1, number2);
      break;
    case `**`:
      result = power(number1, number2);
  }
  console.log(result);

  // Data Type Analysis & Conditional Output
  console.log(typeof result);

  if (result > 0) {
    console.log("Positive");
  } else if (result < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }

  if (Number.isInteger(result)) {
    console.log("An integer number");
  } else {
    console.log("Floating-point number");
  }

  result % 2 === 0 ? console.log("Even") : console.log("Odd");

  if (typeof result === "string") {
    console.log("Error: Division by zero!");
    return null;
  }

  console.log(result ?? "Result is undefined or null, something went wrong!");

  if (result > 0 && (result % 2 === 0 || result % 2 === 1)) {
    console.log("Positive and (Even or Odd)");
  } else {
    console.log("Negative or Zero");
  }

  // Exit Mechanism
  let askExit = prompt("Do you want to continue : (yes/no) ").toLowerCase();
  if (askExit === "no") {
    break;
  }
}
