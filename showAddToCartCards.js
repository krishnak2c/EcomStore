import products from "./products.json";
import { updateCartValue } from "./updateCartValue";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

const productCartContainer = document.querySelector("#productCartContainer");
const productCartTemplate = document.querySelector("#productCartTemplate");

// ----------------------------------------------------------------
// Guard Clause: Only run the following code if we are on the cart page.
// ----------------------------------------------------------------
if (productCartContainer && productCartTemplate) {
  let cartProducts = getCartProductFromLS();

  let actualCartProduct = products.filter((curProd) => {
    return cartProducts.some((cartProd) => cartProd.id === curProd.id);
  });

  const showCartProduct = () => {
    actualCartProduct.forEach((curProd) => {
      const { id, name, category, image, price, stock } = curProd;
      let productClone = document.importNode(productCartTemplate.content, true);
      const lsData = fetchQuantityFromCartLS(id, price);

      productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
      productClone.querySelector(".category").textContent = category;
      productClone.querySelector(".productName").textContent = name;
      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productPrice").textContent = lsData.price;
      productClone.querySelector(".productQuantity").textContent =
        lsData.quantity;

      productClone
        .querySelector(".stockElement")
        .addEventListener("click", (event) => {
          incrementDecrement(event, id, stock, price);
        });

      productClone
        .querySelector(".remove-to-cart-button")
        .addEventListener("click", () => removeProdFromCart(id));

      productCartContainer.appendChild(productClone);
    });
  };

  showCartProduct();
  updateCartProductTotal();
}
// Any functions that need to be exported for other pages (like updating the navbar cart icon) would go outside this `if` block.
updateCartValue();
