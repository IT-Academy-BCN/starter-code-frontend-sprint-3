// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
      id: 1,
      name: "cooking oil",
      price: 10.5,
      type: "grocery",
      offer: {
        number: 3,
        percent: 20,
      },
    },
    {
      id: 2,
      name: "Pasta",
      price: 6.25,
      type: "grocery",
    },
    {
      id: 3,
      name: "Instant cupcake mixture",
      price: 5,
      type: "grocery",
      offer: {
        number: 10,
        percent: 30,
      },
    },
    {
      id: 4,
      name: "All-in-one",
      price: 260,
      type: "beauty",
    },
    {
      id: 5,
      name: "Zero Make-up Kit",
      price: 20.5,
      type: "beauty",
    },
    {
      id: 6,
      name: "Lip Tints",
      price: 12.75,
      type: "beauty",
    },
    {
      id: 7,
      name: "Lawn Dress",
      price: 15,
      type: "clothes",
    },
    {
      id: 8,
      name: "Lawn-Chiffon Combo",
      price: 19.99,
      type: "clothes",
    },
    {
      id: 9,
      name: "Toddler Frock",
      price: 9.99,
      type: "clothes",
    },
  ];
  // Array with products (objects) added directly with push(). Products in this array are repeated.
  var cartList = [];
  
  // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
  var cart = [];
  
  var total = 0;
  
  var quant = 0;
  // Exercise 1
  function buy(id) {
    for (let i = 0; i <= products.length; i++) {
      if (i == id) {
        cartList.push(products[i - 1]);
      }
    }
    console.log(cartList);
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
  }
  
  // Exercise 2
  function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    const list = document.getElementById("cart_list");
    list.remove();
    document.getElementById("total_price").innerHTML = 0;
    
  }
  
  // Exercise 3
  function calculateTotal() {
    //generateCart();
    applyPromotionsCart();
    for (let i = 0; i <= cart.length-1; i++) {
      total += cart[i].quantity*cart[i].price;
      cart[i].totalPrice = cart[i].quantity*cart[i].price;
    }
    // Calculate total price of the cart using the "cartList" array
  }
  
  // Exercise 4
  function generateCart() {
    cartList.forEach((item) => {
      let finalItem = cart.find((it) => it.id === item.id);
      if (finalItem) {
        finalItem.quantity += 1;
      } else {
        finalItem = { ...item, quantity: 1, totalPrice: 0};
        cart.push(finalItem);
      }
    });
  
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  }
  
  // Exercise 5
  function applyPromotionsCart() {
    let discountOil = cart.find((it) => it.id === 1 && it.quantity >= 3);
    if (discountOil) {
      discountOil.price = 10;
    }
    let discountCake = cart.find((it) => it.id === 3 && it.quantity >= 10);
    if (discountCake) {
      discountCake.price = (2/3)*discountCake.price;
    }
    // Apply promotions to each item in the array "cart"
  }
  
  // Exercise 6
  function printCart() {
      const list = document.getElementById("cart_list");
      
      const fragment = document.createDocumentFragment();
      cart.forEach(item => {
        const tr = document.createElement("tr");
        const thName = document.createElement("th");
        const tdPrice = document.createElement("td");
        const tdQuant = document.createElement("td");
        const tdTotal = document.createElement("td");
        thName.textContent = item.name;
        tdPrice.textContent = item.price;
        tdQuant.textContent = item.quantity;
        tdTotal.textContent = item.totalPrice;
        tr.appendChild(thName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuant);
        tr.appendChild(tdTotal);
        fragment.appendChild(tr);
      });
      list.appendChild(fragment);
      
      //TOTAL PRICE
      document.getElementById("total_price").innerHTML = total;

    // Fill the shopping cart modal manipulating the shopping cart dom
  }
  
  // ** Nivell II **
  
  // Exercise 7
  function addToCart(id) {
    products.forEach((product)=>{
      if(product.id==id){
          let finalItem = cart.find((it) => it.id === product.id);
        if (finalItem) {
          finalItem.quantity += 1;
        } else {
          finalItem = { ...product, quantity: 1, totalPrice: 0};
          cart.push(finalItem);
        }
      }
    });

    //numero de productos en carrito
    let holder = 0;
    cart.forEach((item)=>{
      holder += item.quantity;
    });
    document.getElementById("count_product").innerHTML = holder + quant;
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  }
  
  // Exercise 8
  function removeFromCart(id) {
    let pos = 0;
    cart.forEach((item)=>{
      pos ++;
      if(item.id==id && item.quantity>=2){
        item.quantity -= 1;
      }else if(item.id==id){
        cart.splice((pos-1),1);
      }
    });

    //numero de productos en carrito
    let holder = 0;
    cart.forEach((item)=>{
      holder -= item.quantity;
    });
    document.getElementById("count_product").innerHTML =  quant - holder;
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
  }
  
  function open_modal() {
    calculateTotal();
    console.log("Open Modal");
    printCart();
  }