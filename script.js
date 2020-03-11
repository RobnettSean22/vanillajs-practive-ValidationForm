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
//check email validity
validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
//check length
checkLength = (input, min, max) => {
  if (input.value.length < min || input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be bwtween ${min} and ${max}`
    );
  } else {
    showSuccess(input);
  }
};
//check required fields
getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

checkRequired = inputArr => {
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
});
