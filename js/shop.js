// I exported the "products" array to its own file so I am importing it now.
import products from './data.js'

// Global Elements 
const cartListModal = document.getElementById('cart_list')
const totalPrice = document.getElementById('total_price')
const countProduct = document.getElementById('count_product')

// make modular functions
// window.buy = buy
window.cleanCart = cleanCart
// window.calculateTotal = calculateTotal
// window.generateCart = generateCart
window.applyPromotionsCart = applyPromotionsCart
window.addToCart = addToCart
window.open_modal= open_modal

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// function buy(id) {
//     // 1. Loop for to the array products to get the item to add to cart
//     for(let i = 0; i < products.length; i++) {
//         if(products[i].id === id){
//     // 2. Add found product to the cartList array
//             cartList.push(products[i])
//         }
//     }
//     // Log results
//     // console.log(cartList)
//     generateCart()
// }

// Exercise 2
function cleanCart() {
    cartList = []
    cart = []
    cartListModal.innerHTML = ''
    totalPrice.textContent = ''
    countProduct.textContent = 0
    // Log results
    // console.log(cartList)
}

// Exercise 3
// function calculateTotal() {
//     // Calculate total price of the cart using the "cartList" array
//     let finalPrice = 0
//     let priceArr = []
//     for(let i = 0; i < cartList.length; i++) {
//         if(cartList.length > 0) {
//             priceArr.push(cartList[i].price)
//             finalPrice = priceArr.reduce((a, b) => a + b)
//         }
//     }
//     return finalPrice
// }

// Exercise 4
// function generateCart() {
//     // Using the "cartlist" array that contains all the items in the shopping cart, 
//     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
//     cartList.map(product => {
//         const find = cart.find(item => item.id === product.id)
//         if(find === undefined) {
//             cart.push({qty: 1, ...product})
//             cartList = []
//         } else {
//             find.qty += 1
//             cartList = []
//         }
//     })
//     // Log results
//     // console.log(cart)
//     cartList = []
//     countProduct.textContent = `${cart.length}`
//     applyPromotionsCart()
// }

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(product => {

        if(product.id === 1 && product.qty > 2) {
            product.price = 10
        } 
            else if(product.id === 3 && product.qty > 9) {
                product.price = ((5/100)*66).toFixed(2) 
            } 

        product.totalPerItem = (product.price * product.qty)
    })
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    cartListModal.innerHTML = ''
    totalPrice.textContent = ''
    let totalArr = []
    cart.map(product => {
        const { name, price, qty, subtotalWithDiscount, totalPerItem } = product
        cartListModal.innerHTML += `
            <tr>
                <th scope="row">${name}</th>
                <td>$${price}</td>
                <td>${qty}</td>
                <td>$${subtotalWithDiscount ? subtotalWithDiscount : totalPerItem}</td>
            </tr>
        `
        // totalPrice.textContent += `${total}`
        if (subtotalWithDiscount){
            totalArr.push(subtotalWithDiscount)
        } else {totalArr.push(totalPerItem)}
    })
    if(totalArr.length > 0) {
        total = totalArr.reduce((a, b) => a + b)
        totalPrice.textContent += `${total.toFixed(2)}`
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    for(let product of products) {
        if(product.id === id){
            cartList.push(product)
        }
    }
    
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    cartList.map(product => {
        const find = cart.find(item => item.id === product.id)
        if(find === undefined) {
            cart.push({qty: 1, ...product})
            cartList = []
        } else {
            find.qty += 1
            cartList = []
        }
    })
    cartList = []
    countProduct.textContent = `${cart.length}`
    applyPromotionsCart()
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	// console.log("Open Modal");
	printCart();
}