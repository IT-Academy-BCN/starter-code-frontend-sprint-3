

// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];
let total = 0;

//Variable global pel comptador de productes habilitat al botó "Cart"
let counter = 0;

// Exercise 1
function buy(id) {

  // 1. Loop for to the array products to get the item to add to cart
  
  let i, productChosen, product, found = false;
  for (i = 0; i < products.length; i++) {

      // Tornem els objectes al format original, si ja han estat triats abans
      product = products[i];
      delete product.quantity;
      delete product.subTotal;
      delete product.subTotalWithDiscount;

      if (product.id == id) {

        productChosen = product;
        found = true;
      }
  }

  // 2. Add found product to the cartList array
  // Incropora comptador d'articles per la icona del botó "Cart"

  if (found == true) {

    cartList.push(productChosen);
    counter++;
  }
  document.getElementById("count_product").innerHTML = counter;
}

// Exercise 2
function cleanCart() {

  cartList.length = 0;
  // Reinici comptador
  counter = 0;
  document.getElementById("count_product").innerHTML = counter;
  generateCart();
  printCart();

}

// Exercise 3
function calculateTotal() {

  // Calculate total price of the cart using the "cartList" array

  let i, price = 0, totalPrice = 0;
  for (i = 0; i < cartList.length; i++) {

      price = cartList[i].price;
      totalPrice += price;
  }

}

// Exercise 4
function generateCart() {

  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  cart.length = 0;

  let i, cartListItem, cartItem;
  for (i = 0; i < cartList.length; i++) {

      cartListItem = cartList[i];
      cartItemIndex = cart.findIndex(element => element.id === cartListItem.id);
      
      if (cartItemIndex == -1) {

          cart.push(cartListItem);
          cartItem = cart.at(-1);
          cartItem.quantity = 1;
          
      } else {
          cartItem = cart[cartItemIndex];
          cartItem.quantity++;
          
      }
      cartItem.subTotal = cartItem.price * cartItem.quantity;
      // preparem propietat
      cartItem.subTotalWithDiscount = "not available";
      
  }
  applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {

  // Apply promotions to each item in the array "cart"
  // Funció applyPromotionsCart() afegit a la funció GenerateCart()
  // Nous càlculs de les promocions segons "percent" de "products"

  let i, cartItem;
  for(i = 0; i < cart.length; i++) {

    cartItem = cart[i];

    if ((cartItem.id == 1 || cartItem.id == 3) && cartItem.quantity >= cartItem.offer.number ) {

        cartItem.subTotalWithDiscount = Number((cartItem.subTotal - cartItem.subTotal * cartItem.offer.percent/100).toFixed(2));
    }
  }

}

// Exercise 6
function printCart() {

  // Fill the shopping cart modal manipulating the shopping cart dom

  let i, list = "", cartItem, cartTotal = 0;
  for (i = 0; i < cart.length; i++) {

    cartItem = cart[i];

    list += "<tr>";
    list += "<th scope='row'>" +cartItem.name+ "</th>";
    list += "<td class='text-center fs-5'>" +cartItem.price+ "</td>";
    list += "<td class='text-center fs-5'>" +cartItem.quantity+ "</td>";
    if (cartItem.subTotalWithDiscount == "not available") {
      list += "<td class= 'fs-5'>" +cartItem.subTotal+ "</td>";
      cartTotal += cartItem.subTotal;
    }else{
      list += "<td class='fs-5'>" +cartItem.subTotalWithDiscount+ "</td>";
      cartTotal += cartItem.subTotalWithDiscount;
    }
    list += "<td class='text-center'><button type='button' class='btn btn-outline-dark btn-sm rounded-pill px-2 py-0' onclick='oneMoreToCart("+cartItem.id+")'>+</button></td>";
    list += "<td class='text-center'><button type='button' class='btn btn-outline-dark btn-sm rounded-pill px-2 py-0' onclick='removeFromCart("+cartItem.id+")'>-</button></td>";
    list +="</tr>";

  }
  document.getElementById("cart_list").innerHTML = list;
  document.getElementById("total_price").innerHTML = cartTotal.toFixed(2);

  // Habilitat comptador de productes al botó "Cart"
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {

  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  let productChosen, cartItem;
  // Els objectes no queden com originalment a products :-(
  let productChosenIndex = products.findIndex(element => element.id === id);

    if (productChosenIndex != -1) {

      productChosen = products[productChosenIndex];
      counter++;
    }

  let cartItemIndex = cart.findIndex(element => element.id === productChosen.id);

    if(cartItemIndex == -1) {

      cart.push(productChosen);
      cartItem = cart.at(-1);
      cartItem.quantity = 1;
          
    } else {

      cartItem = cart[cartItemIndex];
      cartItem.quantity++;
    }

    cartItem.subTotal = cartItem.price * cartItem.quantity;
    // preparem propietat
    cartItem.subTotalWithDiscount = "not available";
  
  applyPromotionsCart();
  document.getElementById("count_product").innerHTML = counter;
}

// Exercise 9
// Afegit botó '-' al modal per cada producte de Cart
function removeFromCart(id) {

  let cartItem;
  let cartItemIndex = cart.findIndex(element => element.id === id);

    if (cartItemIndex != -1) {

      cartItem = cart[cartItemIndex];

      if(cartItem.quantity > 1) {

        cartItem.quantity--;
        
      }else{
        cart.splice(cartItemIndex, 1);
      }
    }

    cartItem.subTotal = cartItem.price * cartItem.quantity;
    cartItem.subTotalWithDiscount = "not available";
    applyPromotionsCart();

  printCart();
  counter--;
  document.getElementById("count_product").innerHTML = counter;

}

// Funcionalitat extra
// Afegit botó '+' al modal per cada producte de Cart
function oneMoreToCart(id) {

  let cartItem;
  let cartItemIndex = cart.findIndex(element => element.id === id);

    if (cartItemIndex != -1) {

      cartItem = cart[cartItemIndex];
      cartItem.quantity++;
        
    }
  
    cartItem.subTotal = cartItem.price * cartItem.quantity;
    cartItem.subTotalWithDiscount = "not available";
    applyPromotionsCart();

  printCart();
  counter++;
  document.getElementById("count_product").innerHTML = counter;

}

function open_modal(){
  console.log("Open Modal");
  //generateCart();
  printCart();
}