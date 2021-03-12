document.documentElement.className = document.documentElement.className.replace('no-js','js');

let yesDisappear = document.querySelector("#yes");
let textDisappear = document.querySelector("#windows");
let answerNo = document.querySelector("#no");

document.getElementById("no").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("no").innerHTML = "Come back when you would like to see them!";
}

answerNo.addEventListener("click", () => {

    if (textDisappear.classList.contains("disappear")) {
        textDisappear.classList.add("hidden");
    }

    if (yesDisappear.classList.contains("disappear")) {
        yesDisappear.classList.add("hidden");
    }
})