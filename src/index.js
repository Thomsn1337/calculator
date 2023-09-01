// Variable definitions
let numberInput = "0";
let firstNumber = 0;
let secondNumber = 0;
let solution = 0;
let operator = "";
let operatorPressed = false;

// DOM elements
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const commaButton = document.querySelector("#comma");
const negateButton = document.querySelector("#negate");
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
    if (numberInput.charAt(0) === "0") numberInput = e.target.textContent;
    else numberInput += e.target.textContent;
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

