// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
            console.log(cartList);
            break;
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];
    console.log(cartList);
}

// Exercise 3
function calculateTotal() {
    var total = 0;
  for (var i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  return total;
  console.log("Total: " + total);
}

// Exercise 4
 // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

function generateCart() {
    let cart = [];
  for (let i = 0; i < cartList.length; i++) {
    let item = cartList[i];
    let existingItem = cart.find(elem => elem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.subtotal = existingItem.price * existingItem.quantity;
      if (existingItem.offer) {
        let discount = Math.floor(existingItem.quantity / existingItem.offer.number) * existingItem.offer.percent * existingItem.price / 100;
        existingItem.subtotalWithDiscount = existingItem.subtotal - discount;
      } else {
        existingItem.subtotalWithDiscount = existingItem.subtotal;
      }
    } else {
      let newItem = {...item, quantity: 1, subtotal: item.price, subtotalWithDiscount: item.price};
      cart.push(newItem);
    }
  }
  return cart;
}
   

// Exercise 5
    // Apply promotions to each item in the array "cart"
    function applyPromotionsCart(cart) {
        // Promoción botellas de aceite
        for (let i = 0; i < cart.length; i++) {
          const product = cart[i];
          if (product.name === 'cooking oil' && product.cuantidad >= 3) {
            const discountedPrice = 10;
            product.subtotalWithDiscount = discountedPrice * product.cuantidad;
          }
        }
      
        // Promoción productos para hacer pastel
        let totalCakeProducts = 0;
        for (let i = 0; i < cart.length; i++) {
          const product = cart[i];
          if (product.name === 'Instant cupcake mixture') {
            totalCakeProducts += product.cuantidad;
          }
        }
        if (totalCakeProducts >= 10) {
          const discountedPrice = 2/3;
          for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            if (product.name === 'Instant cupcake mixture') {
              product.subtotalWithDiscount = product.price * product.cuantidad * discountedPrice;
            }
          }
        }
      }

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartTable = document.querySelector('#cartModal .modal-body table');
    const cartTotal = document.querySelector('#cartModal .modal-footer .total');
  
    // Clear the current cart table
    cartTable.innerHTML = '';
  
    // Generate the table header row
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      <th>Discount</th>
      <th>Total</th>
    `;
    cartTable.appendChild(headerRow);
  
    // Generate a table row for each product in the cart
    cart.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price} €</td>
        <td>${product.quantity}</td>
        <td>${product.subtotal} €</td>
        <td>${product.discount} €</td>
        <td>${product.total} €</td>
      `;
      cartTable.appendChild(row);
    });
  
    // Update the cart total
    cartTotal.innerHTML = `Total: ${calculateTotal()} €`;
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