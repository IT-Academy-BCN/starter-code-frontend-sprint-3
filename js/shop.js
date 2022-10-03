// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    // for(let i = 0; i < products.length; i++){
    //     if(id == products[i].id) {
    //         cartList.push(products[i]);
    //     }
    // }
    // calculateTotal();
    // console.log("carlist", cartList);
// }

// Exercise 2
function cleanCart() {
    cart = [];
    printCart();
    // cartList = [];
    // console.log("borrado cartlist", cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total=0;
    for(let i = 0; i < cartList.length; i++){
        total += cartList[i].price;
    }
    // console.log("precio total", total);
}

// Exercise 4
// function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // cart = [];

    // for(let i in cartList){
    //     let valor = false;
    //     if(valor = cart.find(producto => producto.id == cartList[i].id)){
    //         valor.quantity++
    //         valor.subtotal = valor.price * valor.quantity;
    //         valor.subtotalWithDiscount = valor.price * valor.quantity;
    //         valor = true;  
    //     }      
    //     if(!valor){
    //         cartList[i]['quantity'] = 1;
    //         cartList[i].subtotal =  cartList[i].price;
    //         cartList[i].subtotalWithDiscount =  cartList[i].price;
    //         cart.push(cartList[i]);
    //     }
    // }
    // applyPromotionsCart();
    // console.log("array cart", cart);
// }

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(let i in cart){
        if(cart[i].id == 1 && cart[i].quantity >= 3){
            cart[i].subtotalWithDiscount = cart[i].subtotal - 10;

            // console.log("subtotal oil", cart[i].subtotal);
            // console.log("subtotal con promocion oil", cart[i].subtotalWithDiscount.toFixed(2));

        }else if(cart[i].id == 3 && cart[i].quantity >= 10){
            cart[i].subtotalWithDiscount = (cart[i].subtotal / 3) * 2;

            // console.log("subtotal cupcake", cart[i].subtotal);
            // console.log("subtotal con promocion cupcake", cart[i].subtotalWithDiscount.toFixed(2));
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    document.getElementById("cart_list").innerHTML = "";
    let num = 0;
    let contador = 0;
    
    for(let i in cart){
        document.getElementById("cart_list").innerHTML += 
        `<tr>
        <th scope="row">${cart[i].name}</th>
        <td>$${cart[i].price}</td>
        <td>${cart[i].quantity}</td>
        <td>$${parseFloat(cart[i].subtotalWithDiscount.toFixed(2))}</td>
        </tr>`;
        num += cart[i].subtotalWithDiscount;
        contador += cart[i].quantity;
    }
    document.getElementById("total_price").innerHTML = parseFloat(num.toFixed(2)); 
    document.getElementById("count_product").innerHTML = contador;
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for(let i = 0; i < products.length; i++){
        if(id == products[i].id) {
            let valor = false
            if(valor = cart.find(producto => producto.id == products[i].id)){
                valor.quantity++
                valor.subtotal = valor.price * valor.quantity;
                valor.subtotalWithDiscount = valor.price * valor.quantity;
                valor = true; 
            }
            if(!valor){
                products[i]['quantity'] = 1;
                products[i].subtotal =  products[i].price;
                products[i].subtotalWithDiscount =  products[i].price;
                cart.push(products[i]);
            } 
        }
    }
    printCart();
    calculateTotal();
    applyPromotionsCart();
    console.log("productos", products);
    console.log("cart", cart);
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}