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
    <div className="store-product">
      <img src={image} />

      <button
        className="store-product__remove-button"
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
        className="store-product__add-button"
        aria-label="Add to cart"
        disabled={amountBought === productLimit}
        onClick={onAddToCartClick}
        type="button"
      ></button>

      <div className="store-product__name">{name}</div>
    </div>
  );
}

export default StoreProduct;
