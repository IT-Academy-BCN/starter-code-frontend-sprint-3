
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
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
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

for(let i=0; i < products.length  ; i++){
    if(products[i].id === id){
     //console.log(products[i]) 
    cartList.push(products[i])
   // console.log(cartList)
    }

  }
  generateCart()
  applyPromotionsCart()
  calculateTotal()
  
}

// Exercise 2
function cleanCart() {
  cartList = [];
}

// Exercise 3
function calculateTotal() {
  let total = 0
  // Calculate total price of the cart using the "cartList" array
  for(let i = 0; i < cartList.length; i++){
     total += cartList[i].price
  } 

  console.log(total)
}

// Exercise 4
function generateCart() {

  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart = []
/*   for(let item in cartList){     
    if(cart.includes(cartList[item])){
      cartList[item].quantity++;
    } else {
      cart.push(cartList[item])
      cart[cart.length - 1].quantity = 1
    }
  }  */

   /*  Convirtiendo FOR-IN a FOR-OF  */

   for(let item of cartList){
     if(cart.includes(item)){
       item.quantity++;
     } else {
       cart.push(item)
       cart[cart.length - 1].quantity = 1;
     }
   }
   console.log(cart) 
   
 }



// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  /* Si el usuario compra 3 o más botellas de aceite, el precio del producto desciende a 10 euros.
  Al comprarse 10 o más mezclas para hacer tarta, su precio se rebaja a 2/3.
  Ayuda: como cada producto del carrito tiene cantidad, ya puedes validar si tiene descuento. */
  
  /* for(let i = 0; i < cart.length; i++){
    if(cart[i].quantity >= 3 && cart[i].id === 1){
      cart[i].price = 10
    } else if(cart[i].quantity >= 10 && cart[i].id === 3) {
      cart[i].price = 5 * 2/3
    }
  } //console.log(cart) */

  /*  Convirtiendo FOR loop a FOR-OF  */

   for(let item of cart){
     if(item.quantity >= 3 && item.id ===1) {
       item.price = 10
     } else if(item.quantity >= 10 && item.id === 3){
       item.price =  5 * 2/3

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

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
