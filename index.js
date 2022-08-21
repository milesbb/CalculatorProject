const PRIMARY_BUTTONS = document.querySelectorAll(".prime-button");
const FUNC_BUTTONS = document.querySelectorAll(".func-button");
const RESULTS_FIELD = document.getElementById("resultsField");
const RESULTS_WRAP = document.getElementById("resultsWrap");

let holder = "";
let arg = "";
let result = 0;

for (const element of PRIMARY_BUTTONS) {
  element.addEventListener("click", () => {
    holder += element.innerHTML;
    RESULTS_FIELD.innerText = holder;
  });
}

let count = 0;
for (const element of FUNC_BUTTONS) {
  if (count === 3) {
    element.addEventListener("click", () => {
      holder = "0";
      RESULTS_FIELD.innerText = holder;
      holder = "";
    });
  } else if (count === 8) {
    element.addEventListener("click", () => {
      holder = holder.replace("x", "*");
      holder = holder.replace("÷", "/");
      console.log(holder);
      try {
        result = eval(holder);
        RESULTS_FIELD.innerText = result.toString();
        holder = result.toString();
      } catch (error) {
        alert("Error with expression, Please re-enter");
        holder = "";
        RESULTS_FIELD.innerText = "0";
      }
    });
  } else {
    element.addEventListener("click", () => {
      holder += element.innerHTML;
      RESULTS_FIELD.innerText = holder;
    });
  }
  count++;
}
