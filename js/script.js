let pwd = document.querySelector("input[name=pwd]");
let pwdConfirm = document.querySelector("input[name=pwd-confirm]");
let createAccount = document.querySelector("button[type=submit]");
let firstName = document.querySelector("#fname");
let errorMessage = document.querySelector(".error-message");

createAccount.addEventListener("click", (e) => {
  if (pwd.value !== pwdConfirm.value) {
    e.preventDefault();
    pwd.classList.add("error");
    pwdConfirm.classList.add("error");
    errorMessage.textContent = "Passwords do not match."
  }
})

