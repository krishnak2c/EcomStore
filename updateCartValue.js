export const updateCartValue = (cartProducts = []) => {
  const count = cartProducts.length;

  if (cartValue) {
    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${count}`;
  }
  return count;
};