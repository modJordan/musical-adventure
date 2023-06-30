//Utility Logic
function isEmpty() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}
//Business Logic
function beepBoop(text) {
  text = text.replace(/\s/g, "");
  let stringArray = Array.from(text);
  let resultArray = [];

  stringArray.forEach(function (num) {
    if (num === "1") {
      resultArray.push("Beep!")
    } else if (num === "2") {
      resultArray.push("Boop!");
    } else if (num === "3") {
      resultArray.push("Won't you be my neighbor?")
    } else {
      resultArray.push(num);
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
  let beepBoopOutput = beepBoop();
  if (beepBoopOutput) {
    document.querySelector("p#pOutput").append(beepBoopOutput);
  } else {
    document.querySelector("div#Output").innerText = null;
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#text-input").addEventListener("submit", handleFormSubmission);
});