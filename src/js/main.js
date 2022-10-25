import { animateHeader, doNotAnimateHeader, fadeIn, animateHeadings, animateRespHeadings } from "./animations";
import { addCartSummary, validate } from "./checkout";
import { readCounter } from "./firebase";
import gsap from "gsap";

/* ----- Animations ----- */

if (document.body.classList.contains("home")) {
  window.addEventListener("load", () => {
    fadeIn();
    doNotAnimateHeader();
    animateHeader();
    // animateHeadings();
  });
}

/* ----- Cart Logic ----- */

// Variables //

const addToCartButtons = document.querySelectorAll(".card__add-to-cart");
const cartCounter = document.querySelector(".cart");
const cartCleaner = document.querySelector(".clean-button");
const modal = document.querySelector(".modal-cart");
const modalDialog = document.querySelector(".modal-cart .modal-dialog");
const modalBg = document.querySelector(".modal-bg-cart");
const modalSell = document.querySelector(".modal-sell");
const modalSellDialog = document.querySelector(".modal-sell .modal-dialog");
const modalSellBg = document.querySelector(".modal-bg-sell");
let productRemoverButtons = document.querySelectorAll(".modal-cart .round-button");

// Event handlers //

addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => addToCart(index + 1));
});
cartCleaner.addEventListener("click", () => cleanCart());

// Modal (cart)

// Modal timeline
const tlCart = gsap.timeline({ defaults: { duration: 0.3, ease: "ease" } });
tlCart.to(modal, { autoAlpha: 1 });
tlCart.to(modalDialog, { y: "-50%" }, "<");
tlCart.pause();

// Open modal
cartCounter.addEventListener("click", () => openModal());
function openModal() {
  printCart();
  tlCart.play();
}

// Close modal
modalBg.addEventListener("click", () => {
  tlCart.reverse();
});

// Modal Sell

// Modal Sell timeline
const tlSell = gsap.timeline({ defaults: { duration: 0.3, ease: "ease" } });
tlSell.to(modalSell, { autoAlpha: 1 });
tlSell.to(modalSellDialog, { y: "-50%" }, "<");
tlSell.pause();

// Open modal Sell
export function openModalSell() {
  printCart();
  tlSell.play();
}

// Close modal Sell
if (modalSellBg)
  modalSellBg.addEventListener("click", () => {
    tlSell.reverse();
    // tlSell.kill();
  });

// Functions

import products from "./products.json";

let cart = window.localStorage.getItem("cart") ? JSON.parse(window.localStorage.getItem("cart")) : [];
let total = 0;

export function cleanCart() {
  cart = [];
  countCart();
  calculateTotal();
  printCart();
  window.localStorage.setItem("cart", JSON.stringify(cart));
}

function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;
  const addToTotal = (price) => (total += price);
  cart.forEach((product) => addToTotal(product.subtotalWithDiscount ? product.subtotalWithDiscount : product.subtotal));

  document.querySelector(".total-title").innerHTML = "";
  document.querySelector(".total-price").innerHTML = "";

  if (cart.length !== 0) {
    document.querySelector(".total-title").innerHTML = "Total";
    document.querySelector(".total-price").innerHTML = `${total}€`;
  }
  window.localStorage.setItem("total", JSON.stringify(total));
}

calculateTotal();

function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  cart.forEach((product) => {
    if (!product.offer) return;
    if (product.quantity >= product.offer.number) {
      product.subtotalWithDiscount = product.subtotal * (1 - product.offer.percent / 100);
      product.subtotalWithDiscount = Number(product.subtotalWithDiscount.toFixed(2));
    } else {
      product.subtotalWithDiscount = product.subtotal;
    }
  });
}

function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const modalContent = document.querySelector(".modal-content");
  modalContent.textContent = "";

  if (cart.length === 0) {
    modalContent.insertAdjacentHTML(
      "afterbegin",
      "<p class='empty-cart'>Start learning by adding a course to your cart</p>"
    );
  } else {
    modalContent.insertAdjacentHTML(
      "afterbegin",
      '<table class="table"><thead><tr><th scope="col">Product</th><th scope="col">Price</th><th scope="col">Qty</th><th scope="col">Total</th><th scope="col">Remove</th></tr></thead><tbody id="cart_list"></tbody></table>'
    );

    const tableBodyContent = document.querySelector("#cart_list");

    cart.forEach((product) => {
      tableBodyContent.insertAdjacentHTML(
        "beforeend",
        `<tr>
        <td>${product.name}</td>
        <td>${product.price}€</td>
        <td>${product.quantity}</td>
        <td>${
          product.subtotalWithDiscount < product.subtotal
            ? product.subtotalWithDiscount + "€ <br>(" + product.offer.percent + "% Disc.)"
            : product.subtotal + "€"
        }</td>
        <td><div class="round-button" id="${product.id}">x</div></td>
      </tr>`
      );
    });

    productRemoverButtons = document.querySelectorAll(".modal-cart .round-button");

    productRemoverButtons.forEach((button) => {
      button.addEventListener("click", () => removeFromCart(button.id));
    });
  }
}

function countCart() {
  let units = 0;
  cart.forEach((element) => (units += element.quantity));
  document.querySelector(".cart-counter").innerHTML = units;
  units === 0 ? modal.classList.add("empty") : modal.classList.remove("empty");
  window.localStorage.setItem("units", JSON.stringify(units));
}

countCart();

function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  products.forEach((element, index) => {
    if (id === element.id) {
      // 2. Add found product to the cart array or update its quantity in case it has been added previously.
      let cartIds = cart.map((product) => product.id);
      const productIndex = cartIds.indexOf(id);
      if (productIndex === -1) {
        let cartProduct = element;
        cartProduct.quantity = 1;
        cartProduct.subtotal = cartProduct.price;
        cartProduct.subtotal = Number(cartProduct.subtotal.toFixed(2));
        cart.push(cartProduct);
      } else {
        cart[productIndex].quantity++;
        cart[productIndex].subtotal = cart[productIndex].price * cart[productIndex].quantity;
        cart[productIndex].subtotal = Number(cart[productIndex].subtotal.toFixed(2));
        applyPromotionsCart();
      }
    }
  });
  window.localStorage.setItem("cart", JSON.stringify(cart));
  countCart();
  calculateTotal();
}

function removeFromCart(id) {
  // 1. Loop for to the array cart to get the item to remove to cart
  cart.forEach((product, index) => {
    if (product.id == id) {
      // 2. Remove found product from de cart array
      product.quantity === 1 ? cart.splice(index, 1) : product.quantity--;
      product.subtotal = product.quantity * product.price;
      applyPromotionsCart();
    }
  });
  window.localStorage.setItem("cart", JSON.stringify(cart));
  countCart();
  calculateTotal();
  printCart();
  addCartSummary();
}

/* ----- Checkout Form Submit ----- */

if (document.body.classList.contains("checkout")) {
  validate();
  addCartSummary();
}

/* ----- Firebase ----- */

readCounter();
