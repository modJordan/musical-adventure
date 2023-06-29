//Utility Logic
function isEmpty() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}
//Business Logic
beepBoop(text) {
  let numberArray = Array.from(number);
  let number = parseInt(numberArray);
  numberArray.forEach(function (num) {
    for (i = 0; i < numberArray.length; i++)
      if (num = 1) {
        console.log("contained 1")
        return numberArray[i].replace(1, "Beep!");
      } else {
        console.log("did not contain 1")
        return numberArray[i];
      }
  })
  console.log(numberArray);
  return numberArray;
}


// UI Logic
function handleFormSubmission(e) {
  e.preventDefault();
  const text = document.getElementById("text-input").value;
  document.getElementById("pTag").removeAttribute("hidden")
  document.getElementById("pTag").innerText = beepBoop(text);
  let beepBoopOutput = beepBoop(text);
  if (beepBoopOutput) {
    document.querySelector("p#pOutput").append(beepBoopOutput);
  } else {
    document.querySelector("div#Output").innerText = null;
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#text-input").addEventListener("submit", handleFormSubmission);
});