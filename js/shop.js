


// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "Cooking Oil",
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
/*function buy(id) {
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

} */

// Exercise 2



function cleanCart() {
  let list = document.getElementById('cart_list')
  list.innerHTML = '<h2>Empty Cart</h2>'
  cart = []; 
  //cartList = [];
  document.getElementById('total_price').textContent = 0
  document.getElementById("count_product").innerHTML = 0
}

// Exercise 3
/* function calculateTotal() {
  let total = 0
  // Calculate total price of the cart using the "cartList" array
  for(let i = 0; i < cartList.length; i++){
     total += (cartList[i].subTotalWithDiscount / cartList[i].quantity)
  } 
  return total.toFixed(2)
  //console.log(total.toFixed(2))
} */

/* se modifica el cart para que funcione la refactorizacion*/
function calculateTotal() {
  let total = 0
  // Calculate total price of the cart using the "cartList" array
  for(let i = 0; i < cart.length; i++){
     total += Number(cart[i].subTotalWithDiscount) 
  } 
  return total.toFixed(2)
  //console.log(total.toFixed(2))
}

// Exercise 4
//function generateCart() {

  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  
/*   for(let item in cartList){     
    if(cart.includes(cartList[item])){
      cartList[item].quantity++;
    } else {
      cart.push(cartList[item])
      cart[cart.length - 1].quantity = 1
    }
  }  */

   /*  Convirtiendo FOR-IN a FOR-OF  */
  /*  cart = []
   for(let item of cartList){
     if(cart.includes(item)){
       item.quantity++;
     } else {
       cart.push(item)
       cart[cart.length - 1].quantity = 1;
     }
   }
 
   console.log(cart) 
  
 } */



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
       let newPrice = 10
       item.subTotalWithDiscount = newPrice * item.quantity;
     } else if(item.quantity >= 10 && item.id === 3){
       let newPrice = item.price * 2/3;
       item.subTotalWithDiscount = (newPrice * item.quantity).toFixed(2);
     } else {
       item.subTotalWithDiscount = (item.price * item.quantity).toFixed(2);
     }
   }
   
}

  

  
// Exercise 6
// Fill the shopping cart modal manipulating the shopping cart dom

function printCart() { 
  /* Esta funcion reacciona al hacer CLICK en los botones 'Add To Cart'  */  
    let addCart = document.querySelectorAll('.card-footer .btn') /* addCart son los 9 botones Add to Cart */
    
    for(let i = 0; i < addCart.length; i++){
      addCart[i].addEventListener('click', () => {
       cartCounter()
       showInCart()
       
      })
    }
  }

let list = document.getElementById('cart_list')
list.innerHTML = `<h2>Empty Cart</h2>`


function showInCart(){ 
/* Esta funcion muestra los productos en el carrito y el total */
 let total = calculateTotal();
 document.getElementById('cart_list').innerHTML = ''

 for(let item of cart){
  document.getElementById('total_price').textContent = total
  //document.getElementById('remove').classList.add('btn-danger')
  document.getElementById('cart_list').innerHTML += `<tr>
  <th scope="row">${item.name}</th>
  <td>$${item.price}</td>
  <td>${item.quantity}</td>
  <td>$${item.subTotalWithDiscount}</td>
  <td><button class='btn btn-danger btn-sm' onclick='removeFromCart(${item.id})'>X</button></td>
  </tr>`

 }
}



function cartCounter() { 
  /* Esta funcion cuenta la cantidad de productos en el array y los muestra en el icono carrito */
    let cartItems = 0;
    for (let item of cart) {
      cartItems += item.quantity;
    }
    document.getElementById("count_product").innerHTML = cartItems;
  }




// ** Nivell II **

// Exercise 8
function addToCart(id) {

    for(let item of products){
        if(item.id === id){
            if(cart.includes(item)){
                item.quantity++;
               }else{
                cart.push(item);
                cart[cart.length-1].quantity = 1;

            } 
            console.log(cart);
            applyPromotionsCart();
            calculateTotal();
           
        }
    }
    
};

 
 /*  Convirtiendo FOR-IN a FOR-OF  */
  /*  cart = []
   for(let item of cartList){
     if(cart.includes(item)){
       item.quantity++;
     } else {
       cart.push(item)
       cart[cart.length - 1].quantity = 1;
     }
   }  


  //console.log(cart) 
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
*/

 // Exercise 9
function removeFromCart(id) {

  for(let item of cart){
    if(item.id === id){
      item.quantity--;
      if(item.quantity == 0){
       cart.splice()
           // 
           }
        } 
      }
    }
    
  
    

/*  

   
 }) */


  // 1. Loop for to the array products to get the item to remove cart


//
printCart()
// Exercise 10

function open_modal() {
  
  console.log("Open Modal");
}
