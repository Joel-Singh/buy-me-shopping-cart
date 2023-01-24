function CheckoutPreview({ cart }) {
  const cartAsJSX = cart.map((cartItem) => {
    const {name, price, amountBought, image} = cartItem;
    return (
      <CheckoutPreviewItem
        name={name}
        price={price}
        amountBought={amountBought}
        image={image}
        key={name} />
    )
  });

  const totalCost = getOverallCost(cart);

  return (
    <div>
      <h2>Checkout</h2>
      <div data-testid="previewItemContainer">{cartAsJSX}</div>
      <div>Total Cost = {totalCost}</div>
    </div>
  );
}

function CheckoutPreviewItem(props) {
  const { image, amountBought, price, name, removeItemCallback } = props;
  const totalPrice = amountBought * price;
  return (
    <div>
      <span>{name}</span>
      <img src={image} />
      <span>Amount in cart: {amountBought}</span>
      <span>
        Total Price: {totalPrice} ({amountBought} X {price})
      </span>
      <button type="button" onClick={removeItemCallback}>
        Remove Item
      </button>
    </div>
  );
}

function getOverallCost(cart) {
  const totalPriceOfEachItem = cart.map((cartItem) => {
    const { price, amountBought } = cartItem;
    return price * amountBought;
  });

  const overallCost = totalPriceOfEachItem.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return overallCost;
}

export default CheckoutPreview;
