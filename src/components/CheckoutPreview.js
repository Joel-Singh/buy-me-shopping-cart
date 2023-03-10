import { Link } from 'react-router-dom'

function CheckoutPreview({ cart }) {
  const cartAsJSX =
    cart.map((cartItem) =>
    {
      const {name, price, amountBought, image} = cartItem;

      if (amountBought === 0)
        return null

      return (
        <CheckoutPreviewItem
          name={name}
          price={price}
          amountBought={amountBought}
          image={image}
          key={name}
        />
      )
    });

  const totalCost = getOverallCost(cart);

  return (
    <div className="checkout-preview">
      <h2>Checkout</h2>
      <div className="checkout-preview__total-cost">Total Cost = {totalCost}</div>
      <div data-testid="previewItemContainer" className="checkout-preview__item-container">{cartAsJSX}</div>
      <Link to="/bought">
        <button type='button'>
          BUY!!!!!!!!!
        </ button>
      </Link>
    </div>
  );
}

function CheckoutPreviewItem(props) {
  const { image, amountBought, price, name, removeItemCallback } = props;
  const totalPrice = amountBought * price;
  return (
    <div className="checkout-preview-item">
      <span className="checkout-preview-item__name">{name}</span>
      <img src={image} />
      <span className="checkout-preview-item__cart-amount">Amount in cart: {amountBought}</span>
      <span className="checkout-preview-item__total-price">
        Total Price: {totalPrice} ({amountBought} X {price})
      </span>
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
