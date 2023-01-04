function CheckoutPreview({ itemsInCart }) {
  const itemsInCartAsJSX = itemsInCart.map((cartItem) => {
    return (
      <CheckoutPreviewItem
        {...cartItem}
        key={cartItem.name}
      />
    )
  })

  const totalCost = getOverallCost(itemsInCart)

  return (
    <div>
      <h2>Checkout</h2>
      <div data-testid="previewItemContainer">
        {itemsInCartAsJSX}
      </div>
      <div>Total Cost = {totalCost}</div>
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

function getOverallCost(itemsInCart) {
  const totalPriceOfEachItem = itemsInCart.map((cartItem) => {
    const {price, amountBought} = cartItem
    return price * amountBought
  })

  const overallCost = totalPriceOfEachItem.reduce((prev, curr) => {
    return prev + curr
  }, 0)

  return overallCost
}

export default CheckoutPreview
