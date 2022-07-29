// // If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
// Creado en products.js
// var products = [
//    {
//         id: 1,
//         name: 'cooking oil',
//         price: 10.5,
//         type: 'grocery',
//         offer: {
//             number: 3,
//             percent: 20
//         }
//     },
//     {
//         id: 2,
//         name: 'Pasta',
//         price: 6.25,
//         type: 'grocery'
//     },
//     {
//         id: 3,
//         name: 'Instant cupcake mixture',
//         price: 5,
//         type: 'grocery',
//         offer: {
//             number: 10,
//             percent: 30
//         }
//     },
//     {
//         id: 4,
//         name: 'All-in-one',
//         price: 260,
//         type: 'beauty'
//     },
//     {
//         id: 5,
//         name: 'Zero Make-up Kit',
//         price: 20.5,
//         type: 'beauty'
//     },
//     {
//         id: 6,
//         name: 'Lip Tints',
//         price: 12.75,
//         type: 'beauty'
//     },
//     {
//         id: 7,
//         name: 'Lawn Dress',
//         price: 15,
//         type: 'clothes'
//     },
//     {
//         id: 8,
//         name: 'Lawn-Chiffon Combo',
//         price: 19.99,
//         type: 'clothes'
//     },
//     {
//         id: 9,
//         name: 'Toddler Frock',
//         price: 9.99,
//         type: 'clothes'
//     }
// ]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Creo un contador para el boton Card
let counter = 0;

// Exercise 1
function buy(id) {
    // console.log("Mi lista de la compra "+cartList)
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (i=0; i<products.length; i++){
        if (products[i].id == id){
            cartList.push(products[i]);
            // console.log(cartList);
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList =[];
    // Igualo a 0 el total de la cesta
    document.getElementById("total_price").innerHTML = 0;
    deleteCart();
}

function deleteCart(){
    // Añadido modificacion en el DOM, si borro la CartList, borro también el listado.
    const select = document.getElementById("cart_list");
    for (let i = cart.length; i >= 0; i--) {
        select.remove(i);
    }
}

// Exercise 3
function calculateTotal() {
    for (i in cartList){
        total += cartList[i].price;
    }
    // console.log(total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (i in cartList){
        //Hago consulta para saber si hay algun objeto repetido en cartList
        let resultado = cart.includes(cartList[i]);
        // console.log(resultado);
        //Compruebo si es cierta
        if (resultado == true){
            // para true aumento en 1 el valor qty 
            cartList[i].quantity++;
            // Multiplico el precio del objeto por la cantidad comprada para añadirlo al subtotal 
            cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
            // console.log(cart);
        }else{
            // Para false agrego por primera vez el objeto a la cart con los valores de carList
            cart.push(cartList[i]);
            //Le añado la cantidad y el valor del subtotal
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].price;
            // console.log(cart);
        }
    }
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(i in cart){
        let qty = cart[i].quantity;
        let id = cart[i].id;
        // cart[i].subtotal = qty * cart[i].price;
        if (id == 1 && qty>=3){
            cart[i].subtotalWithDiscount = qty * 10;
        }else if (id == 3 && qty>=10){
            cart[i].subtotalWithDiscount = (qty * (2/3 * cart[i].price)).toFixed(2);
        }else{
            cart[i].subtotalWithDiscount = undefined;
            cart[i].subtotal = qty * cart[i].price;
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    // Creo una variable para almacenar el elemento donde se dibujará la tabla
    let table = document.getElementById("cart_list");
    // Recorro el cart
    cart.forEach((e)=>{
        // Construyo la fila
        const tr = document.createElement("tr");
        // Le asigno el Id a la fila
        tr.id = 'row' + e.id;
        // //Incremento en 1 para cambiar el Id en la siguiente fila
        // $f++;
        // Construyo el primer campo con th para que sea negrita
        let tdName = document.createElement("th");
        // Defino el contenido del th con el nombre
        tdName.textContent = e.name;
        tdName.style.fontSize = '1.2rem';
        // Declaro el padre y el hijo
        tr.appendChild(tdName)
        // Hago lo mismo para el resto de datos, esta vez con td
        // Precio
        let tdPrice = document.createElement("td");
        tdPrice.textContent = e.price;
        tdPrice.style.fontSize = '1.4rem';
        tr.appendChild(tdPrice);
        // Cantidad
        let tdQty = document.createElement("td");
        tdQty.textContent = e.quantity;
        tdQty.style.fontSize = '1.4rem';
        tdQty.id = 'qty'+ e.id;
        // $q++;
        tr.appendChild(tdQty);
        // Total
        let tdTotal = document.createElement("td");
        // Creo un if para distinguir los productos con descuento y sin descuento
        if(e.subtotalWithDiscount == undefined){
            tdTotal.textContent = e.subtotal;
        }else{
            tdTotal.textContent = e.subtotalWithDiscount;
        }
        tdTotal.style.fontSize = '1.4rem';
        tdTotal.id = 'total'+ e.id;
        // $t++;
        tr.appendChild(tdTotal);
        // Boton para aumentar cantidad
        let tdMore = document.createElement('button');
        // tdBtn.type = 'button';
        tdMore.textContent = '+';
        tdMore.id = 'more';
        tdMore.value = '+';
        tdMore.className = 'tdMore';
        tdMore.style.width = '2.2rem';
        tdMore.style.color = '#fff';
        tdMore.style.fontWeight = 'bold';
        tdMore.style.backgroundColor = '#0d6efd';
        tdMore.style.borderRadius = '2.2rem';
        tdMore.style.borderColor = '#fff';
        tdMore.style.margin = '.3rem';
        tdMore.addEventListener('click', () =>{
            let id = e.id;
            more(id);
        });
        tr.appendChild(tdMore);
        // Boton para disminuir cantidad
        let tdLess = document.createElement('button');
        // tdBtn.type = 'button';
        tdLess.textContent = '-';
        tdLess.id = 'less';
        tdLess.value = '-';
        tdLess.className = 'tdLess';
        tdLess.style.width = '2.2rem';
        tdLess.style.color = '#fff';
        tdLess.style.fontWeight = 'bold';
        tdLess.style.backgroundColor = '#dc3545';
        tdLess.style.borderRadius = '2.2rem';
        tdLess.style.borderColor = '#fff';
        tdLess.style.margin = '.3rem';
        tdLess.addEventListener('click', () =>{
            let id = e.id;
            removeFromCart(id);
        });
        tr.appendChild(tdLess);
        table.appendChild(tr);
    });
    printTotal();
}

function printTotal(){
    // Hago la suma del total para mostrarla
    let totalPrice = 0;
    for (i in cart){
        if(cart[i].subtotalWithDiscount == undefined){
            let price = Number(cart[i].subtotal);
            totalPrice = price + totalPrice;
            document.getElementById("total_price").innerHTML = totalPrice;
        }else{
            let discount = Number(cart[i].subtotalWithDiscount);
            totalPrice = discount + totalPrice;
            document.getElementById("total_price").innerHTML = totalPrice;
        }
    }
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let idCart = cart.findIndex(e => e.id == id);
    let productSelected = products.find(e => e.id == id);
    // Aumento el contador en el boton Card y lo imprimo
    counterMore();

    if (idCart == -1){
        cart.push(productSelected);
        cart[cart.length-1].quantity = 1;
        cart[cart.length-1].subtotal = productSelected.price;
    }else{
        cart[idCart].quantity++;
        cart[idCart].subtotal = cart[idCart].quantity * productSelected.price;
        applyPromotionsCart();
    }
    console.log("Lo que añado al carrito");
    console.log(cart);
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let indexArray = cart.findIndex(e => e.id === id);
    // Disminuyo en 1 la cantidad de cart
    cart[indexArray].quantity--;
    applyPromotionsCart();
    printTotal();
    counterLess();
    // Creo una variable para almacenar la cantidad del objeto a restar
    let qty = cart[indexArray].quantity;

    // Si la cantidad llega a 0, eliminar el objeto del cart
    if (cart[indexArray].quantity === 0){
        cart.splice(indexArray, 1);
        console.log(cart);
        deleteRow(id);
    //Si la cantidad es mayor a 1
    }else{
        console.log(cart);
        document.getElementById('qty'+id).innerHTML = qty;
        let totalPrice = 0;
        if(cart[indexArray].subtotalWithDiscount == undefined){
            let price = Number(cart[indexArray].subtotal);
            totalPrice = price + totalPrice;
            document.getElementById("total"+id).innerHTML = totalPrice;
        }else{
            let discount = Number(cart[indexArray].subtotalWithDiscount);
            totalPrice = discount + totalPrice;
            document.getElementById("total"+id).innerHTML = totalPrice;
        }
    }
}

function counterMore(){
    counter++;
    document.getElementById('count_product').innerHTML = counter;
}

function counterLess(){
    counter--;
    document.getElementById('count_product').innerHTML = counter;
}

function deleteRow(id){
    let rowtoDelete = document.getElementById('row' +id);
    rowtoDelete.remove();
    printTotal();
}

function more(id){
    let indexArray = cart.findIndex(e => e.id === id);
    // Aumento en 1 la cantidad de cart
    cart[indexArray].quantity++;
    applyPromotionsCart();
    printTotal();
    counterMore();
    // Creo una variable para almacenar la cantidad del objeto a restar
    let qty = cart[indexArray].quantity;
    document.getElementById('qty'+id).innerHTML = qty;
    let totalPrice = 0;
    if(cart[indexArray].subtotalWithDiscount == undefined){
        let price = Number(cart[indexArray].subtotal);
        totalPrice = price + totalPrice;
        document.getElementById("total"+id).innerHTML = totalPrice;
    }else{
        let discount = Number(cart[indexArray].subtotalWithDiscount);
        totalPrice = discount + totalPrice;
        document.getElementById("total"+id).innerHTML = totalPrice;
    }
}

function open_modal(){
	console.log("Open Modal");
	printCart();
    console.log(cart);
}