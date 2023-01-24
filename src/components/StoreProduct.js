function StoreProduct(props) {
  const {
    onAddToCartClick,
    onRemoveFromCartClick,
    amountBought,
    productLimit = Infinity,
    image,
    name,
  } = props;

  return (
    <div>
      <img src={image} />

      <button
        aria-label="Remove from cart"
        onClick={onRemoveFromCartClick}
        disabled={amountBought === 0}
        type="button"
      ></button>

      <span
        aria-label="Amount in cart"
        data-testid="Amount in cart"
      >
        {amountBought}
      </span>

      <button
        aria-label="Add to cart"
        disabled={amountBought === productLimit}
        onClick={onAddToCartClick}
        type="button"
      ></button>

      <div>{name}</div>
    </div>
  );
}

export default StoreProduct;
