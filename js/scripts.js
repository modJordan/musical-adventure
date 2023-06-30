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
function beepBoop(text) {
  let stringArray = Array.from(text);
  let resultArray = [];

  stringArray.forEach(function (num) {
    if (num === "1") {
      resultArray.push("Beep!")
    } else {
      console.log("did not contain 1")
      resultArray.push(parseInt(num));
    }
  });
  return resultArray.join(" ")
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