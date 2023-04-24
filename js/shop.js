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
    addToCart(id); // Exercise 7
    /* Exercise 1
    for (let i=0; i<products.length; i++) {
        if (id == products[i].id) {
            cartList.push(products[i]);
        }
    }
    console.log(cartList);
    calculateTotal();
    */
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {
cartList.length = 0;
console.log(cartList);
}

// Exercise 3
function calculateTotal() {
    for (let i=0; i<cartList.length; i++) {
        total += cartList[i].price; 
    }
    console.log(total);
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function generateCart() {
    for (let i=0; i<cartList.length; i++) {
        let found = false;
        for (let j=0; j<cart.length; j++) {
            if (cartList[i] == cart[j])
            {found = true;
            cart[j].quantity++;}
        }
    if (found == false) {
        cartList[i].quantity = 1;
        cart.push(cartList[i]);   
    }}
    console.log(cart);
}
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i=0; i<cart.length; i++) {
        if (cart[i].id == 1 && cart[i].quantity > 2) {
            cart[i].price = 6;
            cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;}
        else if (cart[i].id == 3 && cart[i].quantity > 9) {
            cart[i].price = cart[i].price - (cart[i].price * 0.33);
            cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;}}
        }
        

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    //generateCart();
    //applyPromotionsCart();
    let totalPrice = 0;
    for (let i=0; i<cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
    }
    document.getElementById("total_price").innerHTML = totalPrice;
    document.getElementById("name0").innerHTML = cart[0].name;
    document.getElementById("price0").innerHTML = cart[0].price;
    document.getElementById("quantity0").innerHTML = cart[0].quantity;
    let total0 = cart[0].quantity * cart[0].price;
    document.getElementById("total0").innerHTML = total0 +"$";
    document.getElementById("name1").innerHTML = cart[1].name;
    document.getElementById("price1").innerHTML = cart[1].price;
    document.getElementById("quantity1").innerHTML = cart[1].quantity;
    let total1 = cart[1].quantity * cart[1].price;
    document.getElementById("total1").innerHTML = total1 +"$";
    document.getElementById("name2").innerHTML = cart[2].name;
    document.getElementById("price2").innerHTML = cart[2].price;
    document.getElementById("quantity2").innerHTML = cart[2].quantity;
    let total2 = cart[2].quantity * cart[2].price;
    document.getElementById("total2").innerHTML = total2 +"$";
    document.getElementById("name3").innerHTML = cart[3].name;
    document.getElementById("price3").innerHTML = cart[3].price;
    document.getElementById("quantity3").innerHTML = cart[3].quantity;
    let total3 = cart[3].quantity * cart[3].price;
    document.getElementById("total3").innerHTML = total3 +"$";
    document.getElementById("name4").innerHTML = cart[4].name;
    document.getElementById("price4").innerHTML = cart[4].price;
    document.getElementById("quantity4").innerHTML = cart[4].quantity;
    let total4 = cart[4].quantity * cart[4].price;
    document.getElementById("total4").innerHTML = total4 +"$";
    document.getElementById("name5").innerHTML = cart[5].name;
    document.getElementById("price5").innerHTML = cart[5].price;
    document.getElementById("quantity5").innerHTML = cart[5].quantity;
    let total5 = cart[5].quantity * cart[5].price;
    document.getElementById("total5").innerHTML = total5 +"$";
    document.getElementById("name6").innerHTML = cart[6].name;
    document.getElementById("price6").innerHTML = cart[6].price;
    document.getElementById("quantity6").innerHTML = cart[6].quantity;
    let total6 = cart[6].quantity * cart[6].price;
    document.getElementById("total6").innerHTML = total6 +"$";
    document.getElementById("name7").innerHTML = cart[7].name;
    document.getElementById("price7").innerHTML = cart[7].price;
    document.getElementById("quantity7").innerHTML = cart[7].quantity;
    let total7 = cart[7].quantity * cart[7].price;
    document.getElementById("total7").innerHTML = total7 +"$";
    document.getElementById("name8").innerHTML = cart[8].name;
    document.getElementById("price8").innerHTML = cart[8].price;
    document.getElementById("quantity8").innerHTML = cart[8].quantity;
    let total8 = cart[8].quantity * cart[8].price;
    document.getElementById("total8").innerHTML = total8 +"$";
}



// ** Nivell II **

// Exercise 7
function addToCart(id) {
    let found;
    for (let i=0; i<products.length; i++) {
        if (id == products[i].id) {
            if (cart.length > 0){
                for (let j=0; j<cart.length; j++){
                    if (products[i].id == cart[j].id)
                        {cart[j].quantity++;
                        found = true;}}
                    if (!found){
                        products[i].quantity = 1;
                        cart.push(products[i]);  
                    
                    } }
            else {
                products[i].quantity = 1;
                cart.push(products[i]);
            }
            }
        }
    console.log(cart);
    applyPromotionsCart();}
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.


// Exercise 8
function removeFromCart() {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
let idChosen = parseInt(prompt("From which ID do you want to remove an item?"));
for (let i=0; i<cart.length; i++) {
    if (idChosen == cart[i].id) {
        if (cart[i].quantity > 1) {
            cart[i].quantity--;
            for (let i=0; i<cart.length; i++) {
                if (cart[i].id == 1 && cart[i].quantity <= 2) {
                    cart[i].price = 10.5;
                    cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
                    }
                else if (cart[i].id == 3 && cart[i].quantity < 10) {
                    cart[i].price = 5;
                    cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;}}}
        else if (cart[i].quantity == 1) {
           cartList = cart.splice(i, 1);
        }
    }
}

console.log(cart);
console.log(cartList);
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}