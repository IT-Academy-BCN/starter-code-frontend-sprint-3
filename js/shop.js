// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
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
    cartList.splice(0, -1);

  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}


// Exercise 3
function calculateTotal() {

    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        let indice = cartList[i] - 1;
        total += products[indice].price;
    }
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

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == 1 && cart[i].quantity >= 3) {
            cart[i].price = 10
        } else {
            cart[i].price = cart[i].price
        }
        if (cart[i].id == 3 && cart[i].quantity >= 10) {
            let descuento = cart[i].price / 3
            cart[i].price = descuento.toFixed(2) * 2
        } else {
            cart[i].price = cart[i].price
        }
        cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity
    }

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    addToCart()
    applyPromotionsCart()
    let cartDom = document.getElementById("cart_list")
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        let itemName = cart[i].name
        let itemPrice = cart[i].price
        let itemQuantity = cart[i].quantity
        let itemSubtotal = cart[i].subtotalWithDiscount
        total = total + itemSubtotal
        cartDom.innerHTML +=
            `<tr>
                <th scope="row">${itemName}</th>
                <td>${itemPrice}</td>
                <td>${itemQuantity}</td>
                <td>${itemSubtotal}</td>
            </tr>`
    }

    document.getElementById("total_price").innerHTML = total

}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    cart = []
    console.log(cart)
    products.forEach((product) => {
        if (product.id === id) {
            cartList.push(product);
        }
    });
    cartList.forEach((elemento) =>{
        let cartItem = cart.find((item) => item.id == elemento.id) ?? null;
        if (cartItem != null) {
            cartItem.quantity++;
        } else {
            cart.push({
                id: elemento.id,
                name: elemento.name,
                price: elemento.price,
                type: elemento.type,
                quantity: 1,
                offer: elemento.offer,
                subtotalWithDiscount: 0
            });
        }
    })


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