// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let productToBuy = products.find((product) => product.id === id);
  // 2. Add found product to the cartList array
  cartList.push(productToBuy);
}

// Exercise 2
function cleanCart() {
  // Empty the cartList array by shortening its length 0. No new array is made with this method.
  cartList.length = 0;
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let totalPrice = 0;
  // Iterate over the cartList array in order to get the price of every prodct and add it to the totalPrice variable
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price;
  }
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  for (let i = 0; i < cartList.length; i++) {
    // Iterate over the cart array in order to see if the id of its products match with the id of the products in cartList
    // This way we can know if the product is already in both arrays depending on the index it returns
    let productIndex = cart.findIndex(
      (product) => product.id === cartList[i].id
    );

    // If the index is -1, the product isn't in the cart array, therefore I give it a new property (quantity) with a value of 1 and push it to the cart
    // If the index is 0 or bigger, the product is already in the cart array, therefore I only increase its quantity
    if (productIndex < 0) {
      cartList[i].quantity = 1;
      cart.push(cartList[i]);
    } else {
      cart[productIndex].quantity++;
    }
  }
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
