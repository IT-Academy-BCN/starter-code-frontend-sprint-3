import {
  getElement,
  newElement,
  addClass,
  removeClass,
} from "./helperFunctions.js";

// const cartList = [];
window.cart = [];
const total = 0;

/* ---------------------------------------------------------------- */
/*                            EXERCISE 1                            */
/* ---------------------------------------------------------------- */

// Since this js file is a module, we make functions available
// in the global scope with "window.functionName = function () {...}"
window.buy = function (id) {
  let productToBuy = products.find((product) => product.id === id);
  cartList.push(productToBuy);
};

/* ---------------------------------------------------------------- */
/*                            EXERCISE 2                            */
/* ---------------------------------------------------------------- */

window.cleanCartList = function () {
  cartList.length = 0;
  console.log(cartList);
};

/* ---------------------------------------------------------------- */
/*                            EXERCISE 3                            */
/* ---------------------------------------------------------------- */

let totalPrice = 0;

function calculateTotal() {
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price;
  }
}

/* ---------------------------------------------------------------- */
/*                            EXERCISE 4                            */
/* ---------------------------------------------------------------- */

function generateCart() {
  cart.length = 0;

  for (let i = 0; i < cartList.length; i++) {
    let productIndex = cart.findIndex(
      (product) => product.id === cartList[i].id
    );

    if (productIndex < 0) {
      cartList[i].quantity = 1;
      cartList[i].subtotal = cartList[i].price;
      cart.push(cartList[i]);
    } else {
      cart[productIndex].quantity++;
      cart[productIndex].subtotal =
        cart[productIndex].price * cart[productIndex].quantity;
    }
  }
}

/* ---------------------------------------------------------------- */
/*                            EXERCISE 5                            */
/* ---------------------------------------------------------------- */

function applyPromotionsCart() {
  for (let i = 0; i < cart.length; i++) {
    // Cooking oil discount
    if (cart[i].id === 1 && cart[i].quantity >= 3) {
      cart[i].subtotalWithDiscount = cart[i].quantity * 10;
      // Instant cupcake mixture discount
    } else if (cart[i].id === 3 && cart[i].quantity >= 10) {
      const priceWithTwoDecimals = ((cart[i].subtotal * 2) / 3).toFixed(2);
      cart[i].subtotalWithDiscount = parseFloat(priceWithTwoDecimals);
    } // No discount
    else {
      cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
    }
  }
}

/* ---------------------------------------------------------------- */
/*                            EXERCISE 6                            */
/* ---------------------------------------------------------------- */

// Hide the div with the empty cart message and show the div with the table
function toggleElements() {
  const emptyCartMsg = getElement(".modal-empty-cart-msg");
  addClass(emptyCartMsg, "d-none");

  const cartModalContent = getElement(".modal-cart-content");
  removeClass(cartModalContent, "d-none");
}

// Build the contents of the table body by looping through the cart array
function buildTable() {
  const cartModalList = getElement("#cart_list");
  cartModalList.textContent = "";

  for (let i = 0; i < cart.length; i++) {
    const tr = newElement("tr");
    cartModalList.appendChild(tr);

    const th = newElement("th");
    th.scope = "row";
    th.textContent = cart[i].name;
    tr.appendChild(th);

    const tdPrice = newElement("td");
    tdPrice.textContent = `$ ${cart[i].price}`;
    tr.appendChild(tdPrice);

    const tdQty = newElement("td");
    tdQty.textContent = cart[i].quantity;
    tr.appendChild(tdQty);

    const tdTotal = newElement("td");
    tdTotal.textContent = cart[i].subtotalWithDiscount;
    tr.appendChild(tdTotal);

    const tdRemove = newElement("td");
    const removeBtn = newElement("div");
    addClass(removeBtn, "btn", "btn-outline-dark", "py-0");
    removeBtn.textContent = "x";
    removeBtn.addEventListener("click", function () {
      removeFromCart(cart[i].id);
    });
    tdRemove.appendChild(removeBtn);
    tr.appendChild(tdRemove);
  }
}

// Get the sum of all the products in the cart array
window.calculateTotalCart = function () {
  let totalCart = 0;

  for (let i = 0; i < cart.length; i++) {
    totalCart += cart[i].subtotalWithDiscount;
  }

  return totalCart;
};

// Display the total price under the cart list in the modal
function printTotalCart(total) {
  const totalPriceText = getElement("#total_price");
  totalPriceText.textContent = total;
}

// Empty the cart and reprint it so it doesn't show any products
window.cleanCart = function () {
  // cartList.length = 0;
  cart.length = 0;
  printCart();
};

// Main function that calls all the previous functions
function printCart() {
  toggleElements();
  buildTable();
  const totalCart = calculateTotalCart();
  printTotalCart(totalCart);
}

/* ---------------------------------------------------------------- */
/*                            EXERCISE 8                            */
/* ---------------------------------------------------------------- */

window.addToCart = function (id) {
  const productToBuy = products.find((product) => product.id === id);

  const productIndex = cart.findIndex(
    (product) => product.id === productToBuy.id
  );

  if (productIndex < 0) {
    productToBuy.quantity = 1;
    productToBuy.subtotal = productToBuy.price;
    cart.push(productToBuy);
  } else {
    cart[productIndex].quantity++;
    cart[productIndex].subtotal =
      cart[productIndex].price * cart[productIndex].quantity;
  }

  updateProductCountPill();
};

/* ---------------------------------------------------------------- */
/*                           EXERCISE 9                             */
/* ---------------------------------------------------------------- */

window.removeFromCart = function (id) {
  let productToRemove = products.find((product) => product.id === id);

  let productIndex = cart.findIndex(
    (product) => product.id === productToRemove.id
  );

  if (cart[productIndex].quantity > 1) {
    cart[productIndex].quantity--;
    cart[productIndex].subtotal -= cart[productIndex].price;
  } else {
    cart.splice(productIndex, 1);
  }

  updateProductCountPill();
  applyPromotionsCart();
  printCart();
};

/* ---------------------------------------------------------------- */
/*                            OTHERS                                */
/* ---------------------------------------------------------------- */

window.openModal = function () {
  //   generateCart();

  if (cart.length > 0) {
    applyPromotionsCart();
    printCart();
  } else {
    console.log("No products in cart, modal shouldn't open");
  }
};

function updateProductCountPill() {
  const productCountPill = getElement("#count_product");
  productCountPill.textContent = cart.length;
}
