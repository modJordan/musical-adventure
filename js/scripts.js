window.onload = function () {
  //Business Logic
  function beepBoop(num) {
    const resultArray = [];


    for (let i = 0; i <= num; i++) {
      const currentNum = String(i)

      if (currentNum.includes('3')) {
        resultArray.push("Won't you be my neighbor?");
      } else if (currentNum.includes('2')) {
        resultArray.push("Boop!");
      } else if (currentNum.includes('1')) {
        resultArray.push("Beep!");
      } else {
        resultArray.push(currentNum);
      }
    }
    return resultArray.join(" ");
  }

  // UI Logic
  function handleFormSubmission(e) {
    e.preventDefault();
    const text = document.getElementById("num-input").value;
    const num = parseInt(text);
    let result = beepBoop(num);

    document.getElementById("Output").classList.remove("hidden");
    document.getElementById("Output").innerText = result;
  }

  document.querySelector("form#form").addEventListener("submit", handleFormSubmission);
};