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
    // 1. Loop for to the array products to get the item to add to cart
    let selectedProduct = products.find(p => p.id == id);
    // 2. Add found product to the cartList array
    cartList.push(selectedProduct);
}

// Exercise 2
function cleanCart() {
    while(cartList.length > 0){
        cartList.pop();
    }
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for(let i=0; i < cartList.length; i++){
        total += cartList[i].price;
    }
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for(let i = 0; i < cartList.length; i++){
        index = cart.findIndex(p => p.id == cartList[i].id);
        if(index == -1){
            cart.push({...cartList[i], quantity: 1, subtotal: cartList[i].price});
        } else {
            cart[index].quantity++;
            cart[index].subtotal += cartList[i].price;
        }
    }    
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].offer != undefined && cart[i].quantity >= cart[i].offer.number){
            cart[i].subtotalWithDiscount = cart[i].subtotal * (100 - cart[i].offer.percent) / 100;
        }
        
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let shoppingCart = document.getElementById('cart_list');
    let totalPrice = document.getElementById('total_price');

    // make sure it is empty first
    shoppingCart.innerHTML = "";
    totalPrice.innerHTML = "";


    // create a row for every product in cart and add it to the shopping cart
    for(let i = 0; i < cart.length; i++){
        let row = document.createElement("tr");
        // add the product name to the first column
        let nameColumn = document.createElement("th");
        nameColumn.scope = "row";
        nameColumn.innerHTML = cart[i].name;
        row.appendChild(nameColumn);
        // add the product price to the second column
        let priceColumn = document.createElement("td");
        priceColumn.innerHTML = "$" + cart[i].price;
        row.appendChild(priceColumn);
        // add the product qty to the third column
        let qtyColumn = document.createElement("td");
        qtyColumn.innerHTML = cart[i].quantity;
        row.appendChild(qtyColumn);
        // add the product total price with discount to the last column
        let totalColum = document.createElement("td");
        totalColum.innerHTML = cart[i].subtotalWithDiscount != undefined ? "$" + cart[i].subtotalWithDiscount : "$" + cart[i].subtotal;
        row.appendChild(totalColum);
        // finally, add this row to the shopping cart table
        shoppingCart.appendChild(row);
    }

    // calculate the total price (with discounts)
    total = 0;

    for(let i = 0; i < cart.length; i++){
        total += cart[i].subtotalWithDiscount != undefined ? cart[i].subtotalWithDiscount : cart[i].subtotal;
    }

    // update the total price of the shopping cart
    totalPrice.innerHTML = total;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
// Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    let selectedProduct = products.find(p => p.id == id);
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    index = cart.findIndex(p => p.id == id);
    
    if(index == -1){
        // if this product is not in the cart, add it
        cart.push({...selectedProduct, quantity: 1, subtotal: selectedProduct.price});
    } else {
        // else, update its quantity & subtotal... 
        cart[index].quantity++;
        cart[index].subtotal += selectedProduct.price;
        // ...and check if there are promotions to be applied
        if(cart[index].offer != undefined && cart[index].quantity >= cart[index].offer.number){
            cart[index].subtotalWithDiscount = cart[index].subtotal * (100 - cart[index].offer.percent) / 100;
        }
    }
}

function cleanTheCart() {
    while(cart.length > 0){
        cart.pop();
    }
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to decrease from cart
    let selectedProduct = products.find(p => p.id == id);
    // 2. Decrease the product quantity
    index = cart.findIndex(p => p.id == id);
    cart[index].quantity--;
    // 3. Update the cart
    if(cart[index].quantity == 0){
        // If quantity is 0, remove the product from the cart
        cart.splice(index,1);
    } else {
        // Update the subtotal
        cart[index].subtotal -= selectedProduct.price;
        // ...and check if there are promotions to be reviewed
        if(cart[index].subtotalWithDiscount != undefined){
            if(cart[index].quantity >= cart[index].offer.number){
                // if the quantity still applies for a promotion, update the subtotal with discounts
                cart[index].subtotalWithDiscount = cart[index].subtotal * (100 - cart[index].offer.percent) / 100;
            } else {
                // else, remove the subtotalWithDiscount property
                delete cart[index].subtotalWithDiscount;
            }
        }
    } 
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}