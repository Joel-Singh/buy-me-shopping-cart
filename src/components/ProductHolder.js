import StoreProduct from "./StoreProduct"
function ProductHolder({ productList }) {
  const productsAsHTML = productList.map(productInformation => {
    return <StoreProduct key={productInformation.name} {...productInformation} />
  })

  return (
    <div>{productsAsHTML}</div>
  )
}

export default ProductHolder;
