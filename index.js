const PRIMARY_BUTTONS = document.querySelectorAll(".prime-button");
const FUNC_BUTTONS = document.querySelectorAll(".func-button");
const RESULTS_FIELD = document.getElementById("resultsField");
const RESULTS_WRAP = document.getElementById("resultsWrap");

let holder = "";

for (const element of PRIMARY_BUTTONS) {
  element.addEventListener("click", () => {
    // if () {
    //     alert("max argument length")
    // } else {
      holder += element.innerHTML;
      RESULTS_FIELD.innerText = holder;
    // }
  });
}
