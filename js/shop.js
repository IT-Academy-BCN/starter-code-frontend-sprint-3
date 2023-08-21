// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
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
// var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;

// Exercise 1

// function buy(id) {
//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cartList array
//     for (let i = 0; i < products.length; i++) {
//         if (id == products[i].id) {
//             cartList.push(products[i]); 
//         }
//     }
// }

// Exercise 2

    // Implement a function which allows you to empty the cart 

function cleanCart(){
    cartList.length = 0;
    total = 0;
    cart.length = 0;
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("total_price").innerHTML = "";
}

// Exercise 3

function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    
    // for (let i = 0; i< cartList.length; i++){
    //     total += cartList[i].price;
    // }

    // Calculate total price using cart with discounts
    total = 0;
    for (let i = 0; i < cart.length; i++){
        if (cart[i].subtotalWithDiscount == undefined || cart[i].subtotalWithDiscount == 0) {
            total += (cart[i].price * cart[i].quantity);
        } else {
            total += cart[i].subtotalWithDiscount;
        }
    }
    document.getElementById("total_price").innerHTML = total.toFixed(2);
}

// Exercise 4

// function generateCart() {
//     // Using the "cartlist" array that contains all the items in the shopping cart, 
//     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
//     for (let i = 0; i < cartList.length; i++){
//         let index = cart.indexOf(cartList[i]);
//         if ( index == -1){
//             cartList[i].quantity = 1;
//             cart.push(cartList[i]);
//         } else{
//             cart[index].quantity++;
//         }
//     }
//     // return(cart);
// }

// Exercise 5

function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name == 'cooking oil'){ 
            if (cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
        } else {cart[i].subtotalWithDiscount = 0};
        }

        if (cart[i].name == 'Instant cupcake mixture'){
            if (cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = (cart[i].quantity * ((cart[i].price*2)/3));
        } else {cart[i].subtotalWithDiscount = 0};
    }
}
}

// Exercise 6

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const SHOPPINGCART = document.getElementById("cart_list");
    SHOPPINGCART.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].subtotalWithDiscount == undefined || cart[i].subtotalWithDiscount == 0){
            SHOPPINGCART.insertAdjacentHTML("beforeend", 
            `
                <tr>
                    <th scope="row">${cart[i].name}</th>
                    <td>${cart[i].price}</td>
                    <td>${cart[i].quantity}</td>
                    <td>${(cart[i].price * cart[i].quantity)}</td>
                    <td><button onclick="removeFromCart(${cart[i].id}); open_modal();" class="btn btn-danger btn-sm">Remove</button></td>
                </tr>
            `
            );
        } else {
            SHOPPINGCART.insertAdjacentHTML("beforeend", 
            `
                <tr>
                    <th scope="row">${cart[i].name}</th>
                    <td>${cart[i].price}</td>
                    <td>${cart[i].quantity}</td>
                    <td>${(cart[i].subtotalWithDiscount).toFixed(2)}</td>
                    <td><button onclick="removeFromCart(${cart[i].id}); open_modal();" class="btn btn-danger btn-sm">Remove</button></td>
                </tr>
            `
            );
        }
    }
}


// ** Nivell II **

// Exercise 8

function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            let index = cart.indexOf(products[i]);
            if ( index == -1){
                products[i].quantity = 1;
                cart.push(products[i]);
            } else{
                cart[index].quantity++;
            }
        }
    }
}


// Exercise 9

function removeFromCart(id) {
    for (let i = 0; i < cart.length; i++){
        if (id == cart[i].id) {
            if (cart[i].quantity > 1){
                cart[i].quantity--;
            } else {
                cart.splice(i,1);
            }
        }
    }

}

function open_modal(){
    applyPromotionsCart();
    calculateTotal();
    printCart();

}