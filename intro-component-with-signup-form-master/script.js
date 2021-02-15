"use strict";

const inputs = document.querySelectorAll(".js-input");

const email = document.querySelector("#email");

const emailImg = document.querySelector("#email-error-img");

const emailMsg = document.querySelector("#email-error-msg");

const errorImg = document.querySelectorAll(".error");

const errorMsg = document.querySelectorAll(".error-msg");

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

document.querySelector("#submit").addEventListener("click", function (e) {
  e.preventDefault();
  inputs.forEach((e, i) => {
    if (e.value === "") {
      errorImg[i].style.opacity = 1;
      errorMsg[i].style.opacity = 1;
      inputs[i].style.border = "1px solid hsl(0, 100%, 74%)";
    } else {
      errorImg[i].style.opacity = 0;
      errorMsg[i].style.opacity = 0;
      inputs[i].style.border = "1px solid rgb(202, 202, 202)";
    }
    if (emailIsValid(email.value) === false) {
      emailImg.style.opacity = 1;
      emailMsg.style.opacity = 1;
      email.style.border = "1px solid hsl(0, 100%, 74%)";
    }
  });
});

console.log(inputs[0].style.border);
