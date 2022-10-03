// Array con productos (objetos) añadidos directamente con push(). Los productos de esta array se repiten.
var cartList = [];

// Versión mejorada de cartList. El carrito es una array de productos (objetos), pero cada uno tiene un campo de cantidad para definir su cantidad, por lo que estos productos no se repiten.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Vaya a la array de productos para obtener el artículo para agregar al carrito
    // 2. Agregue el producto encontrado a la array cartList
    // for(let i = 0; i < products.length; i++){
    //     if(id == products[i].id) {
    //         cartList.push(products[i]);
    //     }
    // }
    // calculateTotal();
    // console.log("carlist", cartList);
}

// Exercise 2
function cleanCart() {
    cartList = [];
    cart = [];
    printCart()
    console.log("borrado cartlist", cartList);
}

// Exercise 3
function calculateTotal() {
    // Calcule el precio total del carrito usando la array "cartList"
    total=0;
    for(let i = 0; i < cartList.length; i++){
        total += cartList[i].price;
    }
    console.log("precio total", total);
}

// Exercise 4
function generateCart() {
    // Usando la array "cartlist" que contiene todos los artículos en el carrito de compras,
    // genere el array "carrito" que no contiene artículos repetidos, sino que cada artículo de esta array "carrito" muestra la cantidad de producto.
    // cart = [];

    // // version final
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
    // console.log("cart", cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Aplicar promociones a cada artículo de la array "cart"

    for(let i in cart){
        if(cart[i].id == 1 && cart[i].quantity >= 3){
            cart[i].subtotalWithDiscount = cart[i].subtotal - 10;

            console.log("subtotal oil", cart[i].subtotal);
            console.log("subtotal con promocion oil", cart[i].subtotalWithDiscount.toFixed(2));

        }else if(cart[i].id == 3 && cart[i].quantity >= 10){
            cart[i].subtotalWithDiscount = (cart[i].subtotal / 3) * 2;

            console.log("subtotal cupcake", cart[i].subtotal);
            console.log("subtotal con promocion cupcake", cart[i].subtotalWithDiscount.toFixed(2));
        }
    }

}

// Exercise 6
function printCart() {
    // Llene el modal del carrito de compras manipulando el dom del carrito de compras
    document.getElementById("cart_list").innerHTML = "";
    let num = 0;
    let contador = 0;
    
    for(let i in cart){
        document.getElementById("cart_list").innerHTML += 
        `<tr>
            <th>${cart[i].name}</th>
            <td>$${cart[i].price}</td>
            <td class="text-end">${cart[i].quantity}
                <button class="border-2 rounded btn-outline-dark" onclick ="removeFromCart(${cart[i].id})">-</button>
            </td>
            <td class="text-center">$${parseFloat(cart[i].subtotalWithDiscount.toFixed(2))}</td>
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
    // Refactorizar el código anterior para simplificarlo.
    // 1. Vaya a la array de productos para obtener el artículo para agregar al carrito
    // 2. Agregue el producto encontrado al array del carrito o actualice su cantidad en caso de que se haya agregado anteriormente.
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

    // codigo cristian retocado
    // if(products[i].id in cart){
    //     cart[products[i].id]['quantity']++;
    //     valor.subtotal = valor.price * valor.quantity;
    //     valor.subtotalWithDiscount = valor.price * valor.quantity;
    //     valor = true; 
    // }else{
    //     console.log(products[i])
    //     cart[products[i].id] = products[i];
    //     cart[products[i].id]['quantity'] = 1;
    //     products[i].subtotal =  products[i].price;
    //     products[i].subtotalWithDiscount =  products[i].price;           
    // }
    printCart();
    calculateTotal();
    applyPromotionsCart();
    console.log("productos", products);
    console.log("cart", cart);
}

// Exercise 9
function removeFromCart(id) {
    // 1. Vaya a la array de productos para obtener el artículo para agregar al carrito
    // 2. Agregue el producto encontrado a la array cartList
    for(let i in cart){
        if(id == cart[i].id){
            cart[i].quantity--;
            cart[i].subtotal = cart[i].price * cart[i].quantity;
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
            if(cart[i].quantity < 1){
                cart.splice(i,1)
            }
        }
    }
    printCart()
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}