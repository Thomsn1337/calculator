// Variable definitions
let numberInput = "0";
let firstNumber = 0;
let secondNumber = 0;
let solution = 0;
let operator = "";

// DOM elements
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const commaButton = document.querySelector("#comma");
const negateButton = document.querySelector("#negate");

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

const screenInputVal = document.querySelector("#value");
const screenEquationVal = document.querySelector("#equation");

screenInputVal.textContent = numberInput;

// Function definitions
const handleOperatorClick = e => {
  firstNumber = Number(numberInput);
  operator = e.target.textContent;

  screenEquationVal.textContent = `${firstNumber} ${operator}`
  numberInput = "0";
  screenInputVal.textContent = numberInput;
}

// Event listeners
numberButtons.forEach(button => {
  button.addEventListener("click", e => {
    if (numberInput === "0" || numberInput === "-0") numberInput = numberInput.replace("0", "");
    numberInput += e.target.textContent;
    screenInputVal.textContent = numberInput;
  });
});

commaButton.addEventListener("click", () => {
  if (!numberInput.includes(".")) {
    numberInput += ".";
  }
  screenInputVal.textContent = numberInput;
});

negateButton.addEventListener("click", () => {
  if (numberInput.includes("-")) numberInput = numberInput.slice(1);
  else numberInput = "-" + numberInput;
  screenInputVal.textContent = numberInput;
})

operatorButtons.forEach(button => {
  button.addEventListener("click", handleOperatorClick);
})

clearButton.addEventListener("click", () => {
  numberInput = "0";
  firstNumber = 0;
  secondNumber = 0;
  solution = 0;
  operator = "";

  screenInputVal.textContent = numberInput;
  screenEquationVal.textContent = "";
})

deleteButton.addEventListener("click", () => {
  numberInput = numberInput.slice(0, numberInput.length - 1);
  if (numberInput === "" || numberInput === "-" || numberInput === "0") numberInput = "0";

  screenInputVal.textContent = numberInput;
})
