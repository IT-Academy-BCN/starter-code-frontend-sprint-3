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

        }

      }
    
      console.log(cartList)
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {

    cartList = [];  

    cart = [];
    
    document.getElementById('cart_list').innerHTML = '';
    document.getElementById("total_price").innerHTML = '0';
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
            }
    }


    console.log(cart);
    console.log("========================promotions log below==============");
}
        
// Exercise 5
function applyPromotionsCart() {
    console.log("applypromotions");

    // Apply promotions to each item in the array "cart"
        for (let i = 0; i < cart.length; i++) {

                if ('offer' in cart[i] ){
        // la propiedad subtotalWithDiscount solo aparecera cuando un item tenga descuento

                    if ( cart[i].quantity >=  cart[i].offer.number) {

                        const calculateTotalDiscount = cart[i].price - (cart[i].price * cart[i].offer.percent / 100);
                        const subtotalWithDiscount = (calculateTotalDiscount * cart[i].quantity).toFixed(2);

                            cart[i].subtotalWithDiscount = parseFloat(subtotalWithDiscount);

                    }
                }         
        }

    console.log(cart);
}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    // crear una tr por cada item del array cart y dentro los td's necesarios.
    console.log("printcart");

    const tablebody = document.getElementById("cart_list");
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {

        // carrito se duplica. if the item already is in the car then just increase quantity
       const tr = document.createElement("tr");
       

       const name = document.createElement("th");
       name.setAttribute("scope", "col");
       name.textContent = cart[i].name;

       const price = document.createElement("td");
       price.textContent = cart[i].price;

       const quantity = document.createElement("td");
       quantity.textContent = cart[i].quantity;

       const deleteIcon = document.createElement("td");
       deleteIcon.innerHTML = `<i; class='fas fa-trash-alt' id='trashcan' onclick='removeFromCart(${cart[i].id})'></i>`;

       tr.appendChild(name);
       tr.appendChild(price);
       tr.appendChild(quantity);

        if ("subtotalWithDiscount" in cart[i]) {

            const totalDisc = document.createElement("td");
            totalDisc.textContent = "$" + cart[i].subtotalWithDiscount;
            tr.appendChild(totalDisc);

            totalCost += cart[i].subtotalWithDiscount;
         

        } else {

            const subtotal = document.createElement("td");
            subtotal.textContent = "$" + cart[i].subtotal;
            tr.appendChild(subtotal);

            totalCost += cart[i].subtotal;

        }

       tr.appendChild(deleteIcon).classList.add("trashcan");

       tablebody.appendChild(tr);   

        // if (cart[i].name) {
        //     console.error()
        //     quantity.textContent = cart[i].quantity++;    
        // }

    }


    

    const spanTotal = document.getElementById("total_price");
    spanTotal.textContent = totalCost; 

}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    console.log("===== addtocart function =====");
    for (let i = 0; i < products.length; i++) {

            let item = products[i];

            if (id == item.id) {

                let itExists = cart.find( (cartItem) => cartItem.id === item.id );

                itExists ? itExists.quantity++ : cart.push({...item, quantity: 1});
                console.log(cart);
            }
           
        }
        for (let i = 0; i < cart.length; i++) {

            const subtotal = cart[i].price * cart[i].quantity;
            cart[i].subtotal = subtotal;
            
        }

}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
   for (let i = 0; i < cart.length; i++) {

        if (id == cart[i].id) {
            cart[i].quantity--;

            // applyPromotionsCart();
            // const subtotal = cart[i].price * cart[i].quantity;
            // cart[i].subtotal = subtotal;
            
            console.log(cart);
            
            if (cart[i].quantity == 0) {
                console.log("cart when quantity ==0");

                const index = cart.indexOf(cart[i]);
                cart.splice(index, 1)
                console.log(cart);
            }
        }
   }

       
}
// loop en el array cart.
// Si el item tiene el mismo id reducimos la cantidad
// recalculamos el precio subtotal y subtotalwdiscount
// si la cantidad == 0, quitamos el item del array;
// cad

// const index = array.indexOf(5);
// if (index > -1) { // only splice array when item is found
//   array.splice(index, 1); // 2nd parameter means remove one item only
// }


function open_modal(){
	console.log("Open Modal");
	printCart();
}