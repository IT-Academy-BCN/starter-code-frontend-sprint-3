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

//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cartList array
//     products.forEach((product) => {
//         if (product.id === id) {
//             cartList.push(product);
//         }
//     });
// }

// Exercise 2
function cleanCart() {
  cartList.splice(0, cartList.length);

}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    let indice = cartList[i].id - 1;
    total += products[indice].price;
  }
  return total
}

// Exercise 4
// function generateCart() {
//     // Using the "cartlist" array that contains all the items in the shopping cart,
//     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
//     cart = [];
//     for (let i = 0; i < cartList.length; i++) {
//         let cartItem = cart.find((item) => item.id == cartList[i].id) ?? null;
//         if (cartItem != null) {
//             cartItem.quantity++;
//         } else {
//             cart.push({
//                 id: cartList[i].id,
//                 name: cartList[i].name,
//                 price: cartList[i].price,
//                 type: cartList[i].type,
//                 quantity: 1,
//                 offer: cartList[i].offer,
//                 subtotalWithDiscount: 0
//             });
//         }
//     }
// }

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart".
  cart.forEach((item) =>{
    if(item.id === 1 && item.quantity >= 3 ){
      item.subtotalWithDiscount = 10;
    }else if(item.id === 3 && item.quantity >= 10){
      const discount = item.price / 3
      item.subtotalWithDiscount = (discount * 2).toFixed(2)
    }else{
      item.subtotalWithDiscount = item.price
    }


    item.subtotalWithDiscount = item.subtotalWithDiscount * item.quantity

  })
}

// Exercise 6
function printCart() {
  const cartDom = document.getElementById("cart_list");
  const totalPriceElement = document.getElementById("total_price");
  let totalPrice = 0;
  cartDom.innerHTML = "";

  cart.forEach(item => {
    const { name, price, quantity, subtotalWithDiscount } = item;
    totalPrice += item.subtotalWithDiscount
    const row = document.createElement("tr");
    row.innerHTML = `<th scope="row">${name}</th>
                    <td>${price}</td>
                    <td>${quantity}</td>
                    <td>${subtotalWithDiscount}</td>`;

    cartDom.appendChild(row);
  });


  totalPriceElement.textContent = totalPrice;
}



// ** Nivell II **

// Exercise 7
function addToCart(id) {

  const product = products.find((product) => product.id === id);

  if (product) {
    const cartItem = cart.find((item) => item.id === product.id);
    
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({
        ...product,
        quantity: 1,
        subtotalWithDiscount: 0,
      });
    }
  }
}

function removeFromCart(id){
  const index = cart.findIndex((item) => item.id === id)

  if(index !== -1){
    if(cart[index].quantity > 1) {
      cart[index].quantity--
      cart[index].total = cart[index].subtotalWithDiscount * cart[index].quantity
    }else{
      cart.splice(index,1)
    }
  }
}

function open_modal() {
  console.log("Abrir modal");
  addToCart()
  applyPromotionsCart()
  printCart();
}
