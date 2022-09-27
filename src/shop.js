// Variable products moved to the file variables.js.
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
/*function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    var product

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            product =  products[id -1]
        }
    }
    // 2. Add found product to the cartList array
    cartList.push(product)
    return cartList
}

// Provando si las ofertas se aplican
buy(1)
buy(1)
buy(1)
buy(2)
buy(2)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)

console.log(cartList)
*/
// Exercise 2
function cleanCart() {
    cartList.length = 0
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i< cartList.length; i++) {
        var productPrice = cartList[i].price
        total += productPrice
    }

    console.log(total)
    return total
}

calculateTotal()

// Exercise 4
/*function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
    for (let i = 0; i < cartList.length; i++) {

        //Recorremos el cartList
        function checkExist (cartList) {
            return cartList[i].id == id;
        }

        var index = cart.findIndex(checkExist); 
        
        // Comprobamos si en cart existe el id pasado, sino existe nos da -1, entramos en el primer if. Si existe nos dará su indice.
        // Si ya existe entramos en else.
        if (index === -1) {
            cart.push({...cartList[i], quantity: 1, subtotal: cartList[i].price, subtotalWithDiscount: 0})
            // Empujamos la lista que no existia y le añadimos pa propiedad quantity
        } else {
            cart[index].quantity++;
            cart[index].subtotal += cartList[i].price
            //Usamos el indice obtenido anteriormente para acceder al item y le sumamos uno el quantity 
        }
    }
}
console.log(cart)
generateCart()
*/
// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        //Recorro el cart 
        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3) {
            //El filtro pel nom y la quantitat
            cart[i].subtotalWithDiscount = cart[i].subtotal - 10
            //Entenc que es redueix 10 euros, encara que es pot entedre que es 10 euros.
        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = (cart[i].subtotal / 3) * 2

        } else {
            cart[i].subtotalWithDiscount = cart[i].subtotal
            //Sino hi ha descompte aplicable
        }
    }
}
applyPromotionsCart();

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    //Agafem la llista de productes i el total
    let carrito = document.getElementById('cart_list')
    let totalCarrito = document.getElementById('total_price')

    //Ho vuidem
    carrito.innerHTML = " "
    totalCarrito.innerHTML = " "
    
    //Ens recorrem la llista
    for (let i = 0; i < cart.length; i++) {

        // Creem la taula i l'hi adherim els components
        let columna = document.createElement('tr')
        carrito.appendChild(columna)

        let nombre = document.createElement('th')
        nombre.scope = 'row'
        nombre.innerHTML = cart[i].name
        carrito.appendChild(nombre)

        let precio = document.createElement('td')
        precio.innerHTML = '$ ' + cart[i].price
        carrito.appendChild(precio)

        let qty = document.createElement('td')
        qty.innerHTML = cart[i].quantity
        carrito.appendChild(qty)

        let totalDisc = document.createElement('td')
        totalDisc.innerHTML = '$ ' + (cart[i].subtotalWithDiscount).toFixed(2)
        carrito.appendChild(totalDisc)

    }
     //Recorrem la llista per calcular el preu total de la llista
    let totalProd = 0 

    for (let i = 0; i< cart.length; i++) {

        let productDisc = cart[i].subtotalWithDiscount
        totalProd += productDisc
        
    }

    //Adherim el preu total al total.
    let totalPrecio = document.createElement('span')
    totalPrecio.innerHTML = totalProd.toFixed(2)
    totalCarrito.appendChild(totalPrecio)

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    var selectedItem;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id ) {
            selectedItem = products[i];
        }
    }
    
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    if (cart.length < 1){
        cart.push({...selectedItem, quantity: 1, subtotal: selectedItem.price, subtotalWithDiscount: 0});

    } else {

        function checkExist (selectedItem) {
            return selectedItem.id == id;
        }

        var index = cart.findIndex(checkExist); 

        if ( index == -1){
            cart.push({...selectedItem, quantity: 1, subtotal: selectedItem.price, subtotalWithDiscount: 0});

        } else {
            cart[index].quantity++;
            cart[index].subtotal += cart[index].price;

            if (cart[index].offer !== undefined && cart[index].quantity >= cart[index].offer.number) {
    
                cart[index].subtotalWithDiscount = cart[index].subtotal * (100 - cart[index].offer.percent) / 100;
            }
        }     
    }
}

addToCart(1);
addToCart(1);
addToCart(1);
addToCart(2);

console.log(cart);

// Exercise 8
function removeFromCart(id) {

    // 1. Loop for to the array products to get the item to to decrease from cart
    var selectedItem;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id ) {
            selectedItem = cart[i];
        }
    }

    // 2. Decrease the product quantity
    function checkExist (selectedItem) {
        return selectedItem.id == id;
    }

    var index = cart.findIndex(checkExist); 

    if (index !== -1){
        cart[index].quantity--;
        cart[index].subtotal -= cart[index].price;
    
        // 3. Update Subtotal and Subtotal with dis
        if(cart[index].offer !== undefined && cart[index].quantity < cart[index].offer.number){
            cart[index].subtotalWithDiscount = 0
        }
        
        if(cart[index].quantity == 0){
            cart.splice(index, 1);
        }
    }
}

//removeFromCart(1);
//removeFromCart(1);
//removeFromCart(2);

//console.log(cart);

function open_modal(){
	console.log("Open Modal");
	printCart();
}