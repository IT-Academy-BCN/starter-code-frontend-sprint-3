import { openModalSell, cleanCart } from "./main";

// Exercise 6
export function validate() {
  let error;
  let form = document.querySelector(".form");
  let modalSell = document.querySelector(".modal-sell");

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

  let sold = false;

  form.addEventListener("submit", (e) => {
    error = 0;
    e.preventDefault();
    checkNameFormat(fName);
    checkNameFormat(fLastN);
    checkEmailFormat();
    checkPasswordFormat();
    checkAddressFormat();
    checkPhoneFormat();
    checkShortFields();

    if (error === 0 && !sold) {
      generateModalSellContent();
      openModalSell();
      cleanCart();
      sold = true;
    }
  });
}

const modalSellContent = document.querySelector(".modal-sell .modal-content");
let cart = JSON.parse(window.localStorage.getItem("cart"));
const total = JSON.parse(window.localStorage.getItem("total"));
const units = JSON.parse(window.localStorage.getItem("units"));

function generateModalSellContent() {
  if (units > 1) {
    modalSellContent.insertAdjacentHTML(
      "afterbegin",
      `<p>
  You bought ${units} products which cost ${total}€<br />
  but in IT Academy they are
  </p>
  <p class="free">Free</p>`
    );
  } else {
    modalSellContent.insertAdjacentHTML(
      "afterbegin",
      `<p>
  You bought 1 product which costs ${total}€<br />
  but in IT Academy it is
  </p>
  <p class="free">Free</p>`
    );
  }
}

export function addCartSummary() {
  cart = JSON.parse(window.localStorage.getItem("cart"));

  // Clean if already generated
  document.querySelector(".cart-summary").innerHTML = "";

  let cartHTML = "";

  cart.forEach((el) => {
    cartHTML += `<div class="card ${el.name.toLowerCase()}">
    <div class="card__img--wrapper">
      <div class="card__img"></div>
    </div>
    <div class="round-button">x ${el.quantity}</div>
    <div class="card__info">
      <h3 class="card__title">${el.name}</h3>
      <p class="card__price">${
        el.subtotalWithDiscount ? el.subtotalWithDiscount + "€ (" + el.offer.percent + "% DISC)" : el.subtotal + "€"
      }</p>
    </div>
  </div>`;
  });

  document.querySelector(".cart-summary").insertAdjacentHTML("afterbegin", `${cartHTML}`);
}
