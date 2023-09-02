// Variable definitions
let numberInput = "0";
let firstNumber = 0;
let secondNumber = 0;
let solution = 0;
let operator = "";
let operatorSet = false;
let solutionSet = false;

// DOM elements
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const commaButton = document.querySelector("#comma");
const negateButton = document.querySelector("#negate");

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

const equalButton = document.querySelector("#equals");

const screenInputVal = document.querySelector("#value");
const screenEquationVal = document.querySelector("#equation");

screenInputVal.textContent = numberInput;

// Function definitions
const handleNumberInput = value => {
  if (solutionSet) clearMem();
  if (numberInput.length >= 20) return;
  if (numberInput === "0" || numberInput === "-0")
    numberInput = numberInput.replace("0", "");
  numberInput += value;
  screenInputVal.textContent = numberInput;
};

const handleCommaInput = () => {
  if (!numberInput.includes(".")) {
    numberInput += ".";
  }
  screenInputVal.textContent = numberInput;
};

const convertOperator = operator => {
  if (operator === "+") return "+";
  if (operator === "-") return "−";
  if (operator === "*") return "×";
  if (operator === "/") return "÷";
  if (operator === "%") return "%";
};

const handleOperatorInput = value => {
  if (operatorSet) {
    secondNumber = Number(numberInput);
    firstNumber = solveEquation(operator, firstNumber, secondNumber);
  }
  else firstNumber = Number(numberInput);
  operator = value;
  operatorSet = true;
  solutionSet = false;

  screenEquationVal.textContent = `${firstNumber} ${operator}`;
  numberInput = "0";
  screenInputVal.textContent = numberInput;
};

const handleDeleteInput = () => {
  numberInput = numberInput.slice(0, numberInput.length - 1);
  if (numberInput === "" || numberInput === "-" || numberInput === "0")
    numberInput = "0";

  screenInputVal.textContent = numberInput;
};

const solveEquation = (operator, a, b) => {
  operatorSet = false;
  switch (operator) {
    case "+":
      return a + b;

    case "−":
      return a - b;

    case "×":
      return a * b;

    case "÷":
      if (b === 0) {
        console.log("Division by 0 not allowed");
        return "Math error";
      }
      return a / b;

    case "%":
      if (b === 0) {
        console.log("Division by 0 not allowed");
        return "Math error";
      }
      return a % b;

    default:
      return;
  }
};

const displaySolution = () => {
  if (!operatorSet) {
    solution = Number(numberInput);
    screenEquationVal.textContent = `${solution} =`;
    screenInputVal.textContent = solution;
  } else {
    secondNumber = Number(numberInput);
    solution = solveEquation(operator, firstNumber, secondNumber);
    screenEquationVal.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    screenInputVal.textContent = solution;
  }

  solutionSet = true;
  numberInput = String(solution);
};

const clearMem = () => {
  numberInput = "0";
  firstNumber = 0;
  secondNumber = 0;
  solution = 0;
  operator = "";
  operatorSet = false;
  solutionSet = false;

  screenInputVal.textContent = numberInput;
  screenEquationVal.textContent = "";
};

// Event listeners
numberButtons.forEach(button => {
  button.addEventListener("click", e => {
    handleNumberInput(e.target.textContent);
  });
});

commaButton.addEventListener("click", handleCommaInput);

negateButton.addEventListener("click", () => {
  if (numberInput.includes("-")) numberInput = numberInput.slice(1);
  else numberInput = "-" + numberInput;
  screenInputVal.textContent = numberInput;
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", e => {
    handleOperatorInput(e.target.textContent);
  });
});

clearButton.addEventListener("click", clearMem);

deleteButton.addEventListener("click", handleDeleteInput);

equalButton.addEventListener("click", displaySolution);

window.addEventListener("keydown", e => {
  e.preventDefault();
  const operators = "+-*/%";
  const key = e.key;
  if (key >= 0 && key <= 9) handleNumberInput(key);
  if (key === "," || key === ".") handleCommaInput();
  if (key === "Backspace") handleDeleteInput();
  if (key === "Escape" || key === "Delete") clearMem();
  if (operators.includes(key)) handleOperatorInput(convertOperator(key));
  if (key === "Enter") displaySolution();
});
