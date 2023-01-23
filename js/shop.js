const cartList = [];
const cart = [];
const total = 0;

// Exercise 1
function buy(id) {
  let productToBuy = products.find((product) => product.id === id);
  cartList.push(productToBuy);
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price;
  }
}

// Exercise 4
function generateCart() {
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

// Exercise 5
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
