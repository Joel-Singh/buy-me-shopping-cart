import StoreProduct from "./StoreProduct"
function ProductHolder({ productList, addToCartFunction }) {
  const productsAsHTML = productList.map(productInformation => {
    const name = productInformation.name

    return (
      <StoreProduct
        key={name}
        {...productInformation}
        onAddToCartClick={() => addToCartFunction(name)}
      />)
  })

  return (
    <div>{productsAsHTML}</div>
  )
}

export default ProductHolder;
