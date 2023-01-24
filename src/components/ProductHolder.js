import StoreProduct from "./StoreProduct"
function ProductHolder({ cart, addToCartFunction, removeFromCartFunction }) {
  const productsAsHTML =
    cart.map(productInformation => {
      const {amountBought, image, name} = productInformation;

      return (
        <StoreProduct
          key={name}
          amountBought={amountBought}
          image={image}
          name={name}
          onAddToCartClick={() => addToCartFunction(name)}
          onRemoveFromCartClick={() => removeFromCartFunction(name)}
        />
      )
    })

  return (
    <div className="product-holder">{productsAsHTML}</div>
  )
}

export default ProductHolder;
