import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";
import "./footer.js";
import "./addToCart.js"
import "./fetchQuantityFromCartLS.js"
import "./getCartProducts.js"
import "./header.js"
import "./homeProductCards.js"
import "./homeQuantityToggle.js"
import "./incrementDecrement.js"
import "./removeProdFromCart.js"
import "./showAddToCartCards.js"
import "./showToast.js"
import "./updateCartValue.js"

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);
