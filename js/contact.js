//Form
const contactForm = document.querySelector("#contactForm");

// Subnit
const submitButton = document.querySelector("#submit");

contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  // Name
  const nameInput = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  const nameValue = nameInput.value;

  if (checkInputLength(nameValue) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  // Email
  const emailInput = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  const emailValue = emailInput.value;

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block;";
  }

  // Answer
  const answerInput = document.querySelector("#answer");
  const answerError = document.querySelector("#answerError");
  const answerValue = answerInput.value;

  if (checkAnswerLength(answerValue) === true) {
    answerError.style.display = "none";
  } else {
    answerError.style.display = "block";
  }

  // Address
  const addressInput = document.querySelector("#address");
  const addressError = document.querySelector("#addressError");
  const addressValue = addressInput.value;

  if (checkAddressLength(addressValue) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

// Functions

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

function checkAnswerLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 10) {
    return true;
  } else {
    return false;
  }
}

function checkAddressLength(value) {
  if (value > 15) {
    return true;
  } else {
    return false;
  }
}
