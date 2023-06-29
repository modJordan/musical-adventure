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



// UI Logic
function handleFormSubmission(e) {
  e.preventDefault();
  const text = document.getElementById("text-input").value;
  document.getElementById("pTag").removeAttribute("hidden")
  document.getElementById("pTag").innerText = beepBoop(text);
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#text-input").addEventListener("submit", handleFormSubmission);
});