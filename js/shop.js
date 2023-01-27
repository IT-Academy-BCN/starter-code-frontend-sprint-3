const cartList = [];
const cart = [];
const total = 0;

/* ------------------------- // EXERCISE 1 ------------------------ */
function buy(id) {
  let productToBuy = products.find((product) => product.id === id);
  cartList.push(productToBuy);
}

/* ------------------------- // EXERCISE 2 ------------------------ */
function cleanCartList() {
  cartList.length = 0;
  console.log(cartList);
}

/* ------------------------- EXERCISE 3 ------------------------ */
let totalPrice = 0;

function calculateTotal() {
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price;
  }
}

/* ------------------------- EXERCISE 4 ------------------------ */
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

/* ------------------------- EXERCISE 5 ------------------------ */
function applyPromotionsCart() {
  for (let i = 0; i < cart.length; i++) {
    // Cooking oil discount
    if (cart[i].id === 1 && cart[i].quantity >= 3) {
      cart[i].subtotalWithDiscount = cart[i].quantity * 10;
      // Instant cupcake mixture discount
    } else if (cart[i].id === 3 && cart[i].quantity >= 10) {
      cart[i].subtotalWithDiscount = (cart[i].subtotal * 2) / 3;
    }
  }
}

/* -------------------------- EXERCISE 6 -------------------------- */

// Helper functions to avoid excessive code repeating
function getElement(element) {
  return document.querySelector(element);
}

function newElement(element) {
  return document.createElement(element);
}

// Hide the div with the empty cart message and show the div with the table
function toggleElements() {
  const emptyCartMsg = getElement(".modal-empty-cart-msg");
  emptyCartMsg.classList.add("d-none");

  const cartModalContent = getElement(".modal-cart-content");
  cartModalContent.classList.remove("d-none");
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
    tdTotal.textContent = cart[i].subtotalWithDiscount || cart[i].subtotal;
    tr.appendChild(tdTotal);
  }
}

// Get the sum of all the products in the cart array
function calculateTotalCart() {
  let totalCart = 0;

  for (let i = 0; i < cart.length; i++) {
    totalCart += cart[i].subtotalWithDiscount || cart[i].subtotal;
  }

  return totalCart;
}

// Display the total price under the cart list in the modal
function printTotalCart(total) {
  const totalPriceText = getElement("#total_price");
  totalPriceText.textContent = total;
}

function cleanCart() {
  cartList.length = 0;
  cart.length = 0;
  printCart();
}

// Main function that calls all the previous functions
function printCart() {
  toggleElements();
  buildTable();
  const totalCart = calculateTotalCart();
  printTotalCart(totalCart);
}

/* ------------------------- EXERCISE 8 ------------------------ */
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// ** Nivell II **

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");

  generateCart();

  if (cart.length > 0) {
    applyPromotionsCart();
    printCart();
  }
}
