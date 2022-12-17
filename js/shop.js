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
    for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      // Si se encuentra el producto, añádelo al array cartList
      cartList.push(products[i]);
    }
    }
    
    console.log(cartList);
  return cartList;
}

// Exercise 2
function cleanCart(cartList) {
    cartList.splice(0, cart.length);
}

// Exercise 3
function calculateTotal(cartList) {
    let total = 0;

    for (let i = 0; i < cartList.length; i++){
        total += cartList[i].price;
    }
    
    return total;
}

// Exercise 4
function generateCart(cartList) {
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i];
      
        // Buscamos el producto en el array cart
        const existingProduct = cart.find(p => p.id === product.id);
      
        if (existingProduct) {
          // Si ya existe, incrementamos la cantidad
            existingProduct.quantity++;
            product.subtotal = product.quantity * product.price;
            product.subtotalWithDiscount = product.subtotal; 
            console.log(product.subtotal);
        } else {
          // Si no existe, agregamos el producto al array con cantidad 1
          product.quantity = 1;
          product.subtotal = product.price * product.quantity;
          product.subtotalWithDiscount = product.subtotal;  
          cart.push(product);
        }
        
    }
    
    applyPromotionsCart(cart)
    console.log(cart);
    
    return cart;
}

// Exercise 5
function applyPromotionsCart(cart) {
    for (let i = 0; i < cart.length; i++){
        const product = cart[i];
        if (product.id === 1 && product.quantity >= 3) {
        
            product.subtotalWithDiscount = product.quantity * 10;
        } else if (product.id === 3 && product.quantity >= 10) {
            product.subtotalWithDiscount = product.price * 2/3 * product.quantity;
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

function open_modal(){
	console.log("Open Modal");
	printCart();
}