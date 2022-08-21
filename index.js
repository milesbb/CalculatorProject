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
      arg1 = 0;
      arg2 = 0;
      RESULTS_FIELD.innerText = holder;
      holder = "";
    });
  } else if (count === 8) {
    element.addEventListener("click", () => {
        try {
            result = eval(holder);
        } catch (error) {
            alert(error.message);
        }
        RESULTS_FIELD.innerText = result.toString();
        holder = "";
    });
  } else {
    element.addEventListener("click", () => {
        holder += element.innerHTML;
        RESULTS_FIELD.innerText = holder;
      });
  }
  count++;
}
