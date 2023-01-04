function CheckoutPreview({ itemsInCart }) {
  const itemsInCartAsJSX = itemsInCart.map((cartItem) => {
    return (
      <CheckoutPreviewItem
        {...cartItem}
        key={cartItem.name}
      />
    )
  })

  return (
    <div>
      <h2>Checkout</h2>
      <div data-testid="previewItemContainer">
        {itemsInCartAsJSX}
      </div>
    </div>
  )
}

function CheckoutPreviewItem(props) {
  const { image, amountBought, price, name, removeItemCallback } = props;
  const totalPrice = amountBought * price;
  return (
    <div>
      <span>{name}</ span>
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

export default CheckoutPreview
