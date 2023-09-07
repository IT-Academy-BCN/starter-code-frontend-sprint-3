let products = [];
let cart = [];
let totalPrice = 0;
let countProduct = 0;

(async () => {
  const response = await fetch("../data/products.json");
  products = await response.json();
})();

const updateCountProduct = () => {
  const countProductElement = document.querySelector("#count_product");
  countProductElement.innerHTML = countProduct;
};

const addCountProduct = () => {
  countProduct++;
  updateCountProduct();
};

const resetCountProduct = () => {
  countProduct = 0;
  updateCountProduct();
};

const subtractCountProduct = () => {
  countProduct--;
  updateCountProduct();
};

// Exercise 1
// function buy(id) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === id) {
//       cartList.push(products[i]);
//     }
//   }
// }

// Exercise 2
const cleanCart = () => {
  cart = [];
  printCart();
  resetCountProduct();
};

// Exercise 3
const calculateTotal = () => {
  const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  return totalPrice.toFixed(2);
};

// Exercise 4
// function generateCart() {
//   cart = [];
//   for (let i = 0; i < cartList.length; i++) {
//     let productWithQuantity = { ...cartList[i], quantity: 1 };
//     let repeatedProduct = cart.find(
//       (product) => product.id === productWithQuantity.id
//     );
//     repeatedProduct
//       ? repeatedProduct.quantity++
//       : cart.push(productWithQuantity);
//   }
//   applyPromotionsCart();
// }

// Exercise 5
const applyPromotionsCart = () => {
  cart.forEach((product) => {
    if (product.id === 1) {
      product.price = product.quantity >= product.offer.number ? 10 : 10.5;
      product.subtotalWithDiscount = product.quantity * product.price;
    }
    if (product.id === 3) {
      product.price =
        product.quantity >= product.offer.number ? (product.price * 2) / 3 : 5;
      product.subtotalWithDiscount = product.quantity * product.price;
    }
  });
};

// Exercise 6
const printCart = () => {
  applyPromotionsCart();

  const tableBodyCart = document.querySelector("#cart_list");
  tableBodyCart.innerHTML = "";

  cart.forEach((product) => {
    const subtotal = product.subtotalWithDiscount
      ? product.subtotalWithDiscount
      : product.quantity * product.price;

    const row = `
      <tr>
        <th scope="row">${product.name}</th>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.quantity}</td>
        <td>$${subtotal.toFixed(2)}</td>
        <td>
          <button class="bg-transparent border-0"
          onClick="addToCart(${product.id})">
          <i class="fas fa-plus-circle"></i></button>
        </td>
        <td>
          <button class="bg-transparent border-0"
          onClick="removeFromCart(${product.id})">
          <i class="fas fa-minus-circle"></i></button>
        </td>
      </tr>
    `;

    tableBodyCart.insertAdjacentHTML("beforeend", row);
  });

  const totalPriceElement = document.querySelector("#total_price");
  totalPriceElement.innerHTML = calculateTotal();
};

// ** Nivell II **

// Exercise 7
const addToCart = (id) => {
  const productToAdd = products.find((product) => product.id === id);

  const repeatedCartProduct = cart.find((product) => product.id === id);

  repeatedCartProduct
    ? repeatedCartProduct.quantity++
    : cart.push({ ...productToAdd, quantity: 1 });

  addCountProduct();
  printCart();
};

// Exercise 8
const removeFromCart = (id) => {
  const productIndex = cart.findIndex((product) => product.id === id);

  if (productIndex !== -1) {
    const product = cart[productIndex];

    if (product.quantity > 1) {
      product.quantity--;
    } else {
      cart.splice(productIndex, 1);
    }

    subtractCountProduct();
    printCart();
  }
};

const openModal = () => {
  printCart();
};
