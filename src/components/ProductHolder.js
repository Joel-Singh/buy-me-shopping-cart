import StoreProduct from "./StoreProduct"
function ProductHolder({ productList }) {
  return (
    <div>
      <StoreProduct  {...productList[0]}/>
    </div>
  )
}

export default ProductHolder;
