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
    if (products[i].id === id) {
      // Si se encuentra el producto, añádelo al array cartList
      cartList.push(products[i]);
    }
    }
    
    console.log(cartList);
  return cartList;
}

// Exercise 2
function cleanCart(cartList) {
    cartList.splice(0, cartList.length);
}

// Exercise 3
function calculateTotal(cart) {
    let total = 0;

    

    for (let i = 0; i < cart.length; i++){
        applyPromotionsCart(cart);
        total += cart[i].subtotalWithDiscount;
    }
    
    return total;
}

// Exercise 4
function generateCart(cartList) {
    
}

// Exercise 5
function applyPromotionsCart(cart) {
    for (let i = 0; i < cart.length; i++){
        const product = cart[i];
        if (product.id === 1 && product.quantity >= 3) {
        product.subtotalWithDiscount = product.quantity * 10;
        } else if (product.id === 3 && product.quantity >= 10) {
            product.subtotalWithDiscount = product.price * 2/3 * product.quantity;
        }
    }
}



// Exercise 6
function printCart() {

    
        // Obtenim l'element amb id "cartModal"
  let cartModal = document.getElementById("cartModal");
  
  // Modifiquem el contingut HTML d'aquest element per mostrar la taula de productes del carret
  cartModal.innerHTML = `

		  <div class="modal-dialog">
  <div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-cart-arrow-down"></i> My Cart</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			  </div>
  <div class="modal-body">
  <h3 class="text-center bill px-5">Shopping Cart</h3>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Qty.</th>
          <th scope="col">Total<small>(with discount)</small></th>
        </tr>
        <tbody id="cart_List">
        ${
    // Iteram sobre cada element de l'array cartList
    cart.map(product => {
      // Retornam una fila amb les dades del producte
      return `
              <tr>
                <th scope="row">${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.subtotalWithDiscount}</td>
              </tr>

              `;
    }).join('')
    }
        </tbody>
        </thead>
      </table>
      <div class="text-center fs-3">
      Total: $<span id="total_price">${calculateTotal(cart)}</span>
				  </div>
				  <div class="text-center"> 
					<a href="checkout.html" class="btn btn-primary m-3">Checkout</a>
					<a href="" onclick="cleanCart(cartList)" class="btn btn-primary m-3">Clean Cart</a>
				  </div>
      </div>
      </div>
    
    `;
      
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Buscamos el producto en el array products
    const product = products.find(p => p.id === id);

    // Si encontramos el producto, buscamos en el array cart
    if (product) {
        // Buscamos el producto en el array cart
        const existingProduct = cart.find(p => p.id === product.id);

        if (existingProduct) {
            // Si ya existe, incrementamos la cantidad
            ++existingProduct.quantity;
            console.log(existingProduct.quantity);
            existingProduct.subtotal = existingProduct.quantity * existingProduct.price;
            existingProduct.subtotalWithDiscount = existingProduct.subtotal; 
        } else {
            // Si no existe, agregamos el producto al array con cantidad 1
            product.quantity = 1;
            product.subtotal = product.price * product.quantity;
            product.subtotalWithDiscount = product.subtotal;  
            cart.push(product);  
        }  
    }
    applyPromotionsCart(cart);
    console.log(cart);
    return cart;
}


// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
    console.log("Open Modal");
    printCart()
}