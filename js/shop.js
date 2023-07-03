// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
/* function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let item;

  for (let i in products) {
    if (products[i].id == id) {
      item = products[i];
    }
  }

  // 2. Add found product to the cartList array
  cartList.push(item);
} */

// Exercise 2
function cleanCart() {
  cart.length = 0;
  total = 0;
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  // Update: calculateTotal using array "cart" + quantities + added promotions

  for (let i in cart) {
    if (cart[i].subtotalWithDiscount != undefined) {
      total += cart[i].subtotalWithDiscount;
    } else {
      total += cart[i].subtotal;
    }
  }
}

// Exercise 4
/* function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  let foundItem;

  cartList.forEach((item) => {
    foundItem = cart.find((product) => product.id === item.id);
    if (foundItem == undefined) {
      item.quantity = 1;
      cart.push(item);
    } else {
      foundItem.quantity++;
    }
  });
} */

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  cart.forEach((item) => {
    item.subtotal = item.price * item.quantity;
    if (item.offer != undefined) {
      if (item.quantity >= item.offer.number) {
        item.subtotalWithDiscount = Math.floor(
          item.subtotal - (item.subtotal * item.offer.percent) / 100
        );
      }
    }
  });
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  //generateCart();
  applyPromotionsCart();
  calculateTotal();
  printItems();
  printTotal();
}

function printItems() {
  // Manipulate the <tbody> to add the items in array "cart"
  let tableBody, tableRow, finalSubtotal;
  tableBody = document.querySelector("tbody#cart_list");

  tableBody.innerHTML = "";

  cart.forEach((item) => {
    tableRow = document.createElement("tr");

    if (item.subtotalWithDiscount != undefined) {
      finalSubtotal = item.subtotalWithDiscount;
    } else {
      finalSubtotal = item.subtotal;
    }

    tableRow.innerHTML = `
            <th scope="row">${item.name}</th>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${finalSubtotal}</td>
            <td><button onclick="removeFromCart(${item.id})" class="btn btn-primary m-3">Remove</button></td>
        `;

    tableBody.appendChild(tableRow);
  });
}

function printTotal() {
  // Display the total price of the items in array "cart"
  document.getElementById("total_price").innerHTML = total;
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  let newItem;
  let foundItem;

  products.forEach((product) => {
    if (product.id === id) {
      newItem = product;
    }
  });

  foundItem = cart.find((product) => product.id === newItem.id);
  if (foundItem == undefined) {
    newItem.quantity = 1;
    cart.push(newItem);
  } else {
    foundItem.quantity++;
  }
}

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array cart to get the item
  // 2. Remove item from cart array or reduce by 1 the quantity of that item taking into account total price and promotions
  let itemToRemove;

  itemToRemove = cart.find((product) => product.id === id);
  if (itemToRemove.quantity === 1) {
    cart.splice(cart.indexOf(itemToRemove), 1);
  } else {
    itemToRemove.quantity--;
  }
  
  //Reset values and reset cart modal 
  itemToRemove.subtotalWithDiscount = undefined;
  total = 0;
  printCart();

}

function open_modal() {
  console.log("Open Modal");
  printCart();
}