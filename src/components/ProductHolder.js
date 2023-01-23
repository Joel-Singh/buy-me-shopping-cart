import StoreProduct from "./StoreProduct"
function ProductHolder({ productList, addToCartFunction, removeFromCartFunction }) {
  const productsAsHTML = productList.map(productInformation => {
    const {amountBought, image, name} = productInformation;

    return (
      <StoreProduct
        key={name}
        amountBought={amountBought}
        image={image}
        name={name}
        onAddToCartClick={() => addToCartFunction(name)}
        onRemoveFromCartClick={() => removeFromCartFunction(name)}
      />)
  })

  return (
    <div>{productsAsHTML}</div>
  )
}

export default ProductHolder;
