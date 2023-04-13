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

    for (let i = 0; i < products.length; i++) {

        if (id == products[i].id) {

            cartList.push(products[i]);
            // test
        }

      }
    
      console.log(cartList)
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {

    cartList = [];  

    console.log(cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        
        total += cartList[i].price;
    }
    console.log(total);
}

// Exercise 4
function generateCart() {
    console.log("============GenerateCart func=====================");
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    for (let i = 0; i < cartList.length; i++) {

        let item = cartList[i];
        const itExists = cart.find( (itemCart) => itemCart.id == item.id);

        if(itExists){
                itExists.quantity++
        } else {
                cart.push({...item, quantity: 1})
                // {...item, quantity: 1, subtotal: 31.5,  subtotalWithDiscount : 30 ?oil?????}
            }
    }


    console.log(cart);
    console.log("========================promotions log below==============");
}
// function generateCart() {

//     for (let i = 0; i < cartList.length; i++) {
//         const item = cartList[i];
//         for (let j = 0; j < cart.length; j++) {
            
//             if (item.id == cart[j].id) {
//                 cart[j].quantity++
//             } else {
//                 cart.push({...item, quantity : 1})
//             }

//         }
//     }

//     console.log(cart);

// }
        
// Exercise 5
function applyPromotionsCart() {
    // var discount = discount + (price - specialprice); var discount = discount + (price - specialprice); Then, calculate the price difference between those prices and add it to the discount variable.

    // Apply promotions to each item in the array "cart"
    // Si l'usuari/ària compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
    // Quan es compren 10 o més productes per a fer pastís, el seu preu es rebaixa a 2/3.

    // if item quantity >= offer.number aplicamos offer.percent descuento a item.price
    // subtotalWithDiscount se guarda precio total

        for (let i = 0; i < cart.length; i++) {

                if ('offer' in cart[i] && cart[i].offer.number >= cart[i].quantity){
                
                    const subtotal = cart[i].price * cart[i].quantity;
                    const calculateTotalDiscount = cart[i].price - (cart[i].price * cart[i].offer.percent / 100);
                    const subtotalWithDiscount = (calculateTotalDiscount * cart[i].quantity).toFixed(2);

                    cart[i].subtotal = subtotal;
                    cart[i].subtotalWithDiscount = subtotalWithDiscount;

                    // console.log(typeof(subtotalWithDiscount));

                    // console.log("Subtotal => " + subtotal);
                    // console.log("calcTotalDisc => " + calculateTotalDiscount);
                    // console.log(cart[i].name + " => total " + subtotalWithDiscount);

                } 
                
            
        }

    console.log(cart);
}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
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