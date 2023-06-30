window.onload = function () {
  //Business Logic
  function beepBoop(text) {
    text = text.replace(/\s/g, "");
    const numArray = Array.from(text);

    const resultArray = numArray.map(num => {
      if (num === "1") {
        return "Beep!";
      } else if (num === "2") {
        return "Boop!";
      } else if (num === "3") {
        return "Won't you be my neighbor?";
      } else {
        return num;
      }
    });
    return resultArray.join(" ");
  }

  // UI Logic
  function handleFormSubmission(e) {
    e.preventDefault();
    const text = document.getElementById("num-input").value;
    let result = beepBoop(text)


    document.getElementById("outputBox").classList.remove("hidden");
    document.getElementById("Output").classList.remove("hidden");
    document.getElementById("outputText").innerText = result;
  }

  document.querySelector("form#form").addEventListener("submit", handleFormSubmission);
};