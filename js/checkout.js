// Exercise 6
function validate() {
  var error = 0;

  let form = document.querySelector(".form");

  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  var allFields = document.querySelectorAll(".form-control");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email

  function checkNameFormat(field) {
    field.nextElementSibling.classList.remove("invalid-feedback-shown");
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(field.value)) {
      error++;
      field.nextElementSibling.classList.add("invalid-feedback-shown");
    }
  }

  function checkEmailFormat() {
    fEmail.nextElementSibling.classList.remove("invalid-feedback-shown");
    if (!fEmail.value.includes("@") || !fEmail.value.includes(".")) {
      error++;
      fEmail.nextElementSibling.classList.add("invalid-feedback-shown");
    }
  }

  function checkPasswordFormat() {
    fPassword.nextElementSibling.classList.remove("invalid-feedback-shown");
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(fPassword.value)) {
      error++;
      fPassword.nextElementSibling.classList.add("invalid-feedback-shown");
    }
  }

  function checkAddressFormat() {
    fAddress.nextElementSibling.classList.remove("invalid-feedback-shown");
    if (!/^[a-zA-Z1-9\-\s]+$/.test(fAddress.value)) {
      error++;
      fAddress.nextElementSibling.classList.add("invalid-feedback-shown");
    }
  }

  function checkPhoneFormat() {
    fPhone.nextElementSibling.classList.remove("invalid-feedback-shown");
    if (!/^\d+$/.test(fPhone.value) || fPhone.value.length < 9) {
      error++;
      fPhone.nextElementSibling.classList.add("invalid-feedback-shown");
    }
  }

  function checkShortFields() {
    allFields.forEach((field) => {
      if (field.value == "" || field.value.length < 3) {
        error++;
        field.nextElementSibling.classList.add("invalid-feedback-shown");
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkNameFormat(fName);
    checkNameFormat(fLastN);
    checkEmailFormat();
    checkPasswordFormat();
    checkAddressFormat();
    checkPhoneFormat();
    checkShortFields();
  });
}
