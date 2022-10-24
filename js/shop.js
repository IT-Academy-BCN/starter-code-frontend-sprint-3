// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// function buy(id) {
//   // 1. Loop for to the array products to get the item to add to cart
//   // 2. Add found product to the cartList array
//   products.forEach((element) => {
//     if (element.id === id) {
//       cartList.push(element);
//     }
//   });
//   generateCart();
//   calculateTotal();
// }

// Exercise 2
function cleanCart() {
  cart = [];
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;
  const addToTotal = (price) => (total += price);
  cartList.forEach((product) => addToTotal(product.price));
  return total;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart = [];
  for (i = 0; i < cartList.length; i++) {
    const cartProductNames = cart.map((product) => product.name);
    const productIndex = cartProductNames.indexOf(cartList[i].name);
    if (productIndex === -1) {
      const cartProduct = cartList[i];
      cartProduct.quantity = 1;
      cartProduct.subtotal = cartProduct.price * cartProduct.quantity;
      cartProduct.subtotal = cartProduct.subtotal.toFixed(2);
      cart.push(cartProduct);
    } else {
      cart[productIndex].quantity++;
      cart[productIndex].subtotal = cart[productIndex].price * cart[productIndex].quantity;
      cart[productIndex].subtotal = cart[productIndex].subtotal.toFixed(2);
    }
  }
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  cart.forEach((product) => {
    if (product.offer && product.quantity >= product.offer.number) {
      product.subtotalWithDiscount = product.subtotal * (1 - product.offer.percent / 100);
      product.subtotalWithDiscount = product.subtotalWithDiscount.toFixed(2);
    }
  });
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const cartTableBody = document.querySelector("#cart_list");
  cartTableBody.textContent = "";

  cart.forEach((product) => {
    cartTableBody.insertAdjacentHTML(
      "beforeend",
      `<tr>
  <th scope="row">${product.name}</th>
  <td>$${product.price}</td>
  <td>${product.quantity}</td>
  <td>$${
    product.subtotalWithDiscount
      ? product.subtotalWithDiscount + " (" + product.offer.percent + "% Disc.)"
      : product.subtotal
  }</td>
  </tr>`
    );
  });
}

//Refactored
function countCart() {
  let units = 0;
  cart.forEach((element) => (units += element.quantity));
  document.getElementById("count_product").innerHTML = units;
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
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
  countCart();
  calculateTotal();
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
