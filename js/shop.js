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

const modalList = document.querySelector('#cart_list')
const modalTotalPrice = document.querySelector('#total_price')
const counter = document.querySelector('#count_product')

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const [productById] = products.filter(product => product.id === id)
    cartList.push(productById)
    counter.innerHTML = cartList.length
}

// Exercise 2
function cleanCart() {
    cartList.length = 0
    modalList.innerHTML = ''
    modalTotalPrice.innerHTML = `0`
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    const initialValue = 0;
    const sumTotalPrice = cartList.reduce((accumulator, product) => accumulator + product.price, initialValue)

    modalTotalPrice.innerHTML = sumTotalPrice
    // return sumTotalPrice
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cartList.forEach(product => {
        const getProduct = cart.filter(prod => prod.id === product.id)
        if(getProduct.length){
            const [repeteadProduct] = getProduct
            repeteadProduct.quantity++
            repeteadProduct.subtotal = repeteadProduct.price * repeteadProduct.quantity
        } else {
            cart.push({...product, quantity: 1, subtotal: product.price, subtotalWithDiscount: product.price})            
        }
    })
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart
    .filter(product => (product.id === 1 && product.quantity >= 3)|| (product.id === 3 && product.quantity >= 10))
    .forEach(productWithDiscount => {
        if(productWithDiscount.id === 1) {
            productWithDiscount.subtotalWithDiscount = productWithDiscount.quantity * 10
        } else {
            productWithDiscount.subtotalWithDiscount = productWithDiscount.quantity * (productWithDiscount.price * 0.67)
        }
    })
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    generateCart()
    applyPromotionsCart()

    modalList.innerHTML = ''
    
    cart.forEach(product => {
        modalList.innerHTML += `<tr>
        <th scope="row">${product.name}</th>
        <td>$${product.price}</td>
        <td>${product.quantity}</td>
        <td>$${product.subtotalWithDiscount}</td>
      </tr>`
    })
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

function open_modal(){
	console.log("Open Modal");
	printCart();
}