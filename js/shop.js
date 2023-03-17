// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = []

// Get products from json file
fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        for (const product of data) {
            products.push(product)
        }
})

// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

const modalCartList = document.querySelector('#cart_list')
const modalTotalPrice = document.querySelector('#total_price')
const counter = document.querySelector('#count_product')

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const foundProduct = products.find(product => product.id === id)
    cartList.push(foundProduct)
    counter.innerHTML = cartList.length
}

// Exercise 2
function cleanCart() {
    cartList.length = 0
    modalCartList.innerHTML = ''
    modalTotalPrice.innerHTML = '0'
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    const initialValue = 0;
    total = cartList.reduce((accumulator, product) => accumulator + product.price, initialValue)
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cartList.forEach(product => {
        const productInCart = cart.find(prod => prod.id === product.id)

        if(productInCart){
            productInCart.quantity++
            productInCart.subtotal = productInCart.price * productInCart.quantity
            productInCart.subtotalWithDiscount = productInCart.subtotal
        } else {
            cart.push({...product, quantity: 1, subtotal: product.price, subtotalWithDiscount: product.price})            
        }
    })
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(product => {
        if(product.id === 1 && product.quantity >= 3) {
            // Si compra 3 o més el preu del producte descendeix a 10
            product.subtotalWithDiscount = product.quantity * 10
        } else if (product.id === 3 && product.quantity >= 10) {
            // Si compren 10 o més, el seu preu es rebaixa a 2/3
            product.subtotalWithDiscount = product.quantity * (product.price * 0.67)
        } else {
            // Si no tiene descuento el subtotal es el precio por la cantidad
            product.subtotalWithDiscount = product.quantity * product.price
        }
    })
}

function printProduct({id,name, price, quantity, subtotalWithDiscount}) {
    modalCartList.innerHTML += `<tr>
        <th scope="row">${name}</th>
        <td>$${price}</td>
        <td>$${subtotalWithDiscount}</td>
        <td>
            <button class="btn p-0" onclick="removeFromCart(${id})">
                <i class="fas fa-minus"></i>
            </button>
            <span>${quantity}</span>
            <button class="btn p-0" onclick="addToCart(${id})">
                <i class="fas fa-plus"></i>
            </button>
        </td>
    </tr>`
}

// Print total in modal using cart array
function printCartTotalPrice() {
    const initialValue = 0;
    let totalPrice = cart.reduce((accumulator, product) => accumulator + product.subtotalWithDiscount, initialValue)
    modalTotalPrice.innerHTML = totalPrice
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart()

    modalCartList.innerHTML = ''
    console.log(cart)
    printCartTotalPrice()
    
    cart.forEach(product => {
        printProduct(product)
    })
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    const foundProduct = products.find(product => product.id === id)
    const productInCart = cart.find(product => product.id == foundProduct.id)

    if(productInCart) {
        productInCart.quantity++
        productInCart.subtotal = productInCart.price * productInCart.quantity
        productInCart.subtotalWithDiscount = productInCart.subtotal
    } else {
        const newProduct = {...foundProduct, quantity: 1, subtotal: foundProduct.price, subtotalWithDiscount: foundProduct.price}
        cart.push(newProduct)
    }
    printCart()
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const foundProduct = cart.find(product => product.id === id)
    
    if(foundProduct.quantity > 1) {
        foundProduct.quantity--
    } else {
        const deleteProduct = cart.indexOf(foundProduct)
        cart.splice(deleteProduct, 1)
    }
    printCart()
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}