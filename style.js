let signin = document.getElementById("sign-in-btn");
let signup = document.getElementById("sign-up-btn");
let signupclose = document.getElementById("sign-up-btn-close");

signin.addEventListener("click", (event) => {
  let signinbox = document.getElementsByClassName("signup-signin-form")[0];
  signinbox.style.display = "block";
  let formtype = document.getElementById("form-type");
  let fieldname = document.getElementById("field-name");
  let fieldbutton = document.getElementById("field-button-type");
  formtype.textContent = "Login";
  fieldbutton.textContent = "Login";
  fieldname.style.display = "none";
});

signup.addEventListener("click", (event) => {
  let signinbox = document.getElementsByClassName("signup-signin-form")[0];
  signinbox.style.display = "block";
  let formtype = document.getElementById("form-type");
  let fieldbutton = document.getElementById("field-button-type");
  formtype.textContent = "Register";
  fieldbutton.textContent = "Register";
  let fieldname = document.getElementById("field-name");
  fieldname.style.display = "block";
});

signupclose.addEventListener("click", (event) => {
  let signinbox = document.getElementsByClassName("signup-signin-form")[0];
  signinbox.style.display = "none";
});
