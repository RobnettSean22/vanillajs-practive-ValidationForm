const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

showError = (input, message) => {
  const formControll = input.parentElement;
  formControll.className = "form-controll error";
  const small = formControll.querySelector("small");
  small.innerText = message;
};
//show success otuline
showSuccess = input => {
  const formControll = input.parentElement;
  formControll.className = "form-controll success";
};
//chec=k email validity
validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!validateEmail(email.value)) {
    showError(email, "A valid email is required");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "Password2 is required");
  } else {
    showSuccess(password2);
  }
});
