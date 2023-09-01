let numberInput = "0";

const numberButtons = document.querySelectorAll(".number");
const commaButton = document.querySelector("#comma");
const negateButton = document.querySelector("#negate");
const screenInputVal = document.querySelector("#value");

screenInputVal.textContent = numberInput;

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
