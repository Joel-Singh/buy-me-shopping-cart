function StoreProduct(props) {
  const {
    onAddToCartClick,
    onRemoveFromCartClick,
    amountInCart,
    productLimit = Infinity,
    image,
  } = props;

  return (
    <div>
      <img src={image} />

      <button
        aria-label="Remove from cart"
        onClick={onRemoveFromCartClick}
        disabled={amountInCart === 0}
        type="button"
      ></button>

      <span aria-label="Amount in cart" data-testid="Amount in cart">
        {amountInCart}
      </span>

      <button
        aria-label="Add to cart"
        disabled={amountInCart === productLimit}
        onClick={onAddToCartClick}
        type="button"
      ></button>

    </div>
  );
}

export default StoreProduct;
