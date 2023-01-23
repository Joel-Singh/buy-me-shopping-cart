function addItemToCart(cart, itemName) {
  const clonedCart = JSON.parse(JSON.stringify(cart));
  const foundCartItem = findCartItem(clonedCart, itemName);
  ++foundCartItem.amountBought;
  return clonedCart;
}

function removeItemFromCart(cart, itemName) {
  const clonedCart = JSON.parse(JSON.stringify(cart));
  const foundCartItem = findCartItem(clonedCart, itemName);
  --foundCartItem.amountBought;
  return clonedCart;
}

function findCartItem(cart, itemName) {
  const foundCartItem =
    cart.find(
      (cartItem) =>
        cartItem.name === itemName
    );
  return foundCartItem;
}

export { addItemToCart, removeItemFromCart };
