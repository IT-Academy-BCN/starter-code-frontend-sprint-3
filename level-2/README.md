# Front End Development with Vue.js - IT Academy

## **Sprint 3**

This sprint focuses on JavaScript. The goal is to build a simple demo for an e-commerce web application, with a working shopping cart and applicable discounts on the products.

<details>
<summary>Log</summary>

### ⭐ **Level 1** ⭐

**— Exercise 1**

Make the `buy()` function, which lets users add products to the shopping cart.

##### ✅ Finished: 20/01/2023

**— Exercise 2**

Make the `cleanCart()` function, which lets users empty the shopping cart.

##### ✅ Finished: 20/01/2023

**— Exercise 3**

Make the `calculateTotal()` function, which adds the price of every product in the shopping cart.

##### ✅ Finished: 20/01/2023

**— Exercise 4**

Make the `generateCart()` function, which generates an updated version of the shopping cart list but without repeated products (instead, it shows the quantity of each product.)

##### ✅ Finished: 22/01/2023

**— Exercise 5**

Make the `applyPromotionsCart()` function, which calculates the subtotal of certain products if promotions are applicable.

##### ✅ Finished: 23/01/2023

**— Exercise 6**

Make the `printCart()` function, which dinamically shows the user's cart list upon clicking the cart button at the top. Since the function was very long and did a lot of stuff, I broke it up into smaller functions.

✏️**Notes:**

- I learned that you can use the logical OR operator (`||`) instead of the ternary operator (`? :`) in certain circumstances, and it's more concise and easier to read.

##### ✅ Finished: 27/01/2023

**— Exercise 7**

Validate the checkout form.

✏️**Notes:**

- I started using [JS modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to organize my code a little better, since I wanted to have a few helper functions in their own separate file. When using modules, it's important to run the files through a server or else it won't work properly. You also need to include `type="module"` in the `<script>` element.

##### ✅ Finished: 31/01/2023

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

### ⭐⭐ **Level 2** ⭐⭐

**— Exercise 8**

Refactor the code by consolidating the `buy()` and `generateCart()` functions into one, `addToCart()`.

##### ✅ Finished: 01/02/2023

**— Exercise 9**

Complete the `removeFromCart()` function so users can remove a product from their cart or decrease its quantity in the case that they have more than one of the same product. To make this function invokable through the UI, I added a button next to each product in the cart list table and gave it an `eventListener` so that the function fires when the button is clicked on.

✏️**Notes:**

- I modified the `addClass` and `removeClass` helper functions so that they can accept multiple class names at once. For this, I used the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and used a `for...of` loop that iterates through the array of class names, applying them to the target element one by one.

##### ✅ Finished: 03/02/2023

</details>
