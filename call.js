// call.js

let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".button");
let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value === "C") {
      expression = "";
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(expression);
        expression = display.value;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } else {
      expression += value;
      display.value = expression;
    }
  });
});
