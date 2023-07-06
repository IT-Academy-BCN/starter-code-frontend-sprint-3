// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
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

let subTotalWithDiscount1 = 0;
let subTotalWithDiscount2 = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            // 2. Add found product to the cartList array
            cartList.push(products[i]);
            document.getElementById('count_product').innerHTML = cartList.length;
        }
    }
    console.log('New Cart List: ', cartList);
}

// Exercise 2
function cleanCart() {
    cartList.splice(0);

    let cartBody = document.getElementById('cart_list');
    cartBody.innerHTML = '';

    let tr = document.createElement("tr");
    let productName = document.createElement("th");
    productName.textContent = '';
    tr.appendChild(productName);

    let productPrice = document.createElement("td");
    productPrice.textContent = '';
    tr.appendChild(productPrice);

    let productQuantity = document.createElement("td");
    productQuantity.textContent = '';
    tr.appendChild(productQuantity);

    cartBody.appendChild(tr);

    document.getElementById('total_price').innerHTML = '0';

    console.log('Empty Cart List: ', cartList);
}

// Exercise 3
function calculateTotal() {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
        totalPrice += cartList[i].price;
    }
}

// Exercise 4
function generateCart() {

    for (let i = 0; i < cartList.length; i++) {
        cartList[i].quantity = 1;
    }
    console.log(cartList);
    for (let i = 0; i < cartList.length; i++) {

        const existingCartItemIndex = cart.findIndex(item => item.id === cartList[i].id);

        if (existingCartItemIndex !== -1) {
            cart[existingCartItemIndex].quantity += 1;
        } else {
            cart.push(cartList[i]);
        }
    }

    console.log('Array cart: ', cart);
    applyPromotionsCart();



}

// Exercise 5
function applyPromotionsCart() {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3) {
            cart[i].price = 10;
            subTotalWithDiscount1 = cart[i].price * cart[i].quantity;

        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= 10) {
            const productsThree = Math.floor(cart[i].quantity / 3);
            const restOfProducts = cart[i].quantity % 3;
            subTotalWithDiscount2 = (productsThree * 2 * cart[i].price) + (restOfProducts * cart[i].price);

        }
    }

    return {
        subTotalWithDiscount1,
        subTotalWithDiscount2
    };

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartBody = document.getElementById('cart_list');
    cartBody.innerHTML = '';
    let finalPrice = 0;

    for (let i = 0; i < cart.length; i++) {

        let tr = document.createElement("tr");
        let productName = document.createElement("th");
        productName.textContent = cart[i].name;
        tr.appendChild(productName);

        let productPrice = document.createElement("td");
        productPrice.textContent = cart[i].price;
        tr.appendChild(productPrice);

        let productQuantity = document.createElement("td");
        productQuantity.textContent = cart[i].quantity;
        tr.appendChild(productQuantity);


        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3) {
            let productPrice = document.createElement("td");
            productPrice.textContent = subTotalWithDiscount1.toFixed(2) + '$';
            tr.appendChild(productPrice);
            finalPrice += subTotalWithDiscount1;
        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= 10) {
            let productPrice = document.createElement("td");
            productPrice.textContent = subTotalWithDiscount2.toFixed(2) + '$';
            tr.appendChild(productPrice);
            finalPrice += subTotalWithDiscount2;
        } else {
            let productPrice = document.createElement("td");
            productPrice.textContent = cart[i].quantity * cart[i].price + '$';
            tr.appendChild(productPrice);
            finalPrice += cart[i].quantity * cart[i].price;
        }


        cartBody.appendChild(tr);


    }

    document.getElementById('total_price').innerHTML = finalPrice;

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
    generateCart();
    applyPromotionsCart();
    printCart();
}