// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
let producte=confirm("Vols afegir el producte "+products[id-1].name+" ?");

if (producte==true){

    

        
    for(let i=0;i<products.length;i++){
        producte = products[i];
        if (producte.id == id) {
            cartList.push(producte);
       
         
  }}}
 

  else {alert("No s'ha afegit cap producte a la cistella")}
  console.log(cartList);

} 

// Exercise 2
function cleanCart() {cartList.length=0; cart.length=0; suma=0;
    printCart(0);
alert("Has buidat la cistella")
}

   
console.log(cartList);

// Exercise 3
let suma=0;
function calculateTotal() {
    for(let i=0; i<cartList.length; i++){
   
      
    suma+=cartList[i].price
console.log(cartList.price)

    }console.log(suma)
    // Calculate total price of the cart using the "cartList" array
}


// Exercise 4
function generateCart() {
   
    
    for (let added of cartList){
        if (cart.length > 0){
          let repeated = false;
          let i = 0;
          while (!repeated && i < cart.length){
            if (added.id === cart[i].id){
              cart[i].quantity += 1;
              repeated = true;
            }
            i++
          }
          if (!repeated){
            added.quantity = 1;
            cart.push(added);
          }
        } else {
          added.quantity = 1;
          cart.push(added);
        }
      
}
console.log (cart)}




    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
if (cart.id==1&cart.quantity>=3){cart[0].price==10}
else if (cart.id==3&cart.quantity>=10) {cart[2].price==cart[2].price*(2)/(3)}
else {}



}




// Exercise 6
function printCart() {
    calculateTotal()
    generateCart()
    applyPromotionsCart()
    

    let carro= document.getElementById('cart_list')
    let totalCarro = document.getElementById('total_price')

    carro.innerHTML = " "
    totalCarro.innerHTML = " "

    for (let i = 0; i < cart.length; i++) {

        let columna = document.createElement('tr')
        carro.appendChild(columna)

        let nombre = document.createElement('th')
        nombre.scope = 'row'
        nombre.innerHTML = cart[i].name
        carro.appendChild(nombre)

        let precio = document.createElement('td')
        precio.innerHTML = '$ ' + cart[i].price
        carro.appendChild(precio)

        let qty = document.createElement('td')
        qty.innerHTML = cart[i].quantity
        carro.appendChild(qty)

        let totalDisc = document.createElement('td')
        totalDisc.innerHTML = '$ ' + (cart[i].price * cart[i].quantity)
        carro.appendChild(totalDisc)

    }
   
    
    let totalPreu = document.createElement('span')
    totalPreu.innerHTML = suma
    totalCarro.appendChild(totalPreu)

    // Fill the shopping cart modal manipulating the shopping cart dom

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {

    let producte=confirm("Vols afegir el producte "+products[id-1].name+" ?");

    if (producte==true){
        
        for(let i=0;i<products.length;i++){
            producte = products[i];
            if (producte.id == id) {
                if (cart.length > 0){
                    let repeated = false;
                    let j = 0;
                    while (!repeated && j < cart.length){
                      if (producte.id == cart[j].id){
                        cart[j].quantity += 1;
                        repeated = true;
                      }
                      j++
                    }
                    if (!repeated){
                      producte.quantity = 1;
                      cart.push(producte);
                    }
                  } else {
                    producte.quantity = 1;
                    cart.push(producte);
                  }
           
             
      }}}
     
      
    
      else {alert("No s'ha afegit cap producte a la cistella")}
      console.log(cart)
    }

    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    

// Exercise 8
function removeFromCart(id) {
let eliminat=cart[id]

    for (let i=0; i<cart.length; i++){

        if (eliminat==cart[i]){
            cartList.push;
            cart.splice[i];
            
        }
        else{alert("id no existeix")}

    }

    

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}