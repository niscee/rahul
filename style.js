let signin = document.getElementById("sign-in-btn");
let signup = document.getElementById("sign-up-btn");
let logout = document.getElementById("logout-btn");
let formsubmit = document.getElementById("loginRegisterForm");
let signupclose = document.getElementById("sign-up-btn-close");
let hamburgericon = document.getElementById("hamburger-icon");
let hamburgerclose = document.getElementById("hamburger-close");

// hamburger navbar open/close
hamburgericon.addEventListener("click", (event) => {
  let hamburger = document.getElementsByClassName("hamburger-navbar")[0];
  hamburger.style.display = "block";
});

// hamburger navbar open/close
hamburgerclose.addEventListener("click", (event) => {
  let hamburger = document.getElementsByClassName("hamburger-navbar")[0];
  hamburger.style.display = "none";
});

// Hide sign in button if user logged in.
const isLogin = localStorage.getItem("isLogin");
if (isLogin) {
  logout.style.display = "block";
  signin.style.display = "none";
  signup.style.display = "none";
} else {
  signin.style.display = "block";
  signup.style.display = "block";
  logout.style.display = "none";
  // buybtn.style.display = "none";
}

// clear localstorage
logout.addEventListener("click", (event) => {
  localStorage.clear();
  location.reload();
});

// Login box
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

// Register box
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

// Register / Login box close
signupclose.addEventListener("click", (event) => {
  let signinbox = document.getElementsByClassName("signup-signin-form")[0];
  signinbox.style.display = "none";
});

// store form data in local storage
formsubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("field-name");
  const emailInput = document.getElementById("field-email");
  const passwordInput = document.getElementById("field-password");
  let fieldbutton = document.getElementById("field-button-type");
  if (fieldbutton.textContent === "Register") {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
  } else {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email === null || password === null) {
      alert("Please register first!!!!!!");
    } else {
      if (email != emailInput.value && password != passwordInput.value) {
        alert("Wrong Credentails!!!!!");
      } else {
        localStorage.setItem("isLogin", true);
        logout.style.display = "block";
        signin.style.display = "none";
        signup.style.display = "none";
      }
    }
  }
  location.reload();
});
