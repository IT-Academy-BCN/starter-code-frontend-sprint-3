import { getElement, addClass, removeClass } from "./helperFunctions.js";

/* ------------------------- // EXERCISE 6 ------------------------ */

// Regex
const lettersOnlyRegex = /^[A-Za-z]+$/;
const numbersOnlyRegex = /^[0-9]+$/;
const lettersAndNumbersOnlyRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validateName() {
  const fName = getElement("#fName");
  const errorName = getElement("#errorName");

  if (!fName.value.match(lettersOnlyRegex) || fName.value.length < 3) {
    addClass(fName, "is-invalid");
    addClass(errorName, "d-block");
  } else {
    removeClass(fName, "is-invalid");
    addClass(fName, "is-valid");
    removeClass(errorName, "d-block");
  }
}

function validateLastN() {
  const fLastN = getElement("#fLastN");
  const errorLastN = getElement("#errorLastN");

  if (!fLastN.value.match(lettersOnlyRegex) || fLastN.value.length < 3) {
    addClass(fLastN, "is-invalid");
    addClass(errorLastN, "d-block");
  } else {
    removeClass(fLastN, "is-invalid");
    addClass(fLastN, "is-valid");
    removeClass(errorLastN, "d-block");
  }
}

function validateEmail() {
  const fEmail = getElement("#fEmail");
  const errorEmail = getElement("#errorEmail");
  if (!fEmail.value.match(emailRegex) || fEmail.value.length < 3) {
    addClass(fEmail, "is-invalid");
    addClass(errorEmail, "d-block");
  } else {
    removeClass(fEmail, "is-invalid");
    addClass(fEmail, "is-valid");
    removeClass(errorEmail, "d-block");
  }
}

function validatePassword() {
  const fPassword = getElement("#fPassword");
  const errorPassword = getElement("#errorPassword");

  if (
    !fPassword.value.match(lettersAndNumbersOnlyRegex) ||
    fPassword.value.length < 3
  ) {
    addClass(fPassword, "is-invalid");
    addClass(errorPassword, "d-block");
  } else {
    removeClass(fPassword, "is-invalid");
    addClass(fPassword, "is-valid");
    removeClass(errorPassword, "d-block");
  }
}

function validateAddress() {
  const fAddress = getElement("#fAddress");
  const errorAddress = getElement("#errorAddress");

  if (fAddress.value.length < 3) {
    addClass(fAddress, "is-invalid");
    addClass(errorAddress, "d-block");
  } else {
    removeClass(fAddress, "is-invalid");
    addClass(fAddress, "is-valid");
    removeClass(errorAddress, "d-block");
  }
}

function validatePhone() {
  const fPhone = getElement("#fPhone");
  const errorPhone = getElement("#errorPhone");

  if (!fPhone.value.match(numbersOnlyRegex) || fPhone.value.length != 9) {
    addClass(fPhone, "is-invalid");
    addClass(errorPhone, "d-block");
  } else {
    removeClass(fPhone, "is-invalid");
    addClass(fPhone, "is-valid");
    removeClass(errorPhone, "d-block");
  }
}

window.validate = function () {
  validateName();
  validateLastN();
  validateEmail();
  validatePassword();
  validateAddress();
  validatePhone();
};
