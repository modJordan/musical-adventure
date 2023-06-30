
//Business Logic
function beepBoop(text) {
  text = text.replace(/\s/g, "");
  const inputNumber = parseInt(text, 10);
  // let stringArray = Array.from(inputNumber);
  let numArray = [];
  let numResultArray = [];

  for (let i = 0; i <= inputNumber; i++) {
    numResultArray.push(i);
  }

  numResultArray.forEach(function (num) {
    if (num === 1) {
      numArray.push("Beep!")
    } else if (num === 2) {
      numArray.push("Boop!");
    } else if (num === 3) {
      numArray.push("Won't you be my neighbor?")
    } else {
      numArray.push(num);
    }
  });
  return numArray.join(" ")
}

function caluclateSpan(text) {
  numArray = [text]
}


// UI Logic
function handleFormSubmission(e) {
  e.preventDefault();
  const text = document.getElementById("num-input").value;
  let result = beepBoop(text)

  document.getElementById("pTag").removeAttribute("hidden")
  document.getElementById("pTag").innerText = result;
  document.querySelector("p#pOutput").innerText = result;
}

window.addEventListener("load", function () {
  document.querySelector("form#form").addEventListener("submit", handleFormSubmission);
});