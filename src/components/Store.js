import ProductHolder from "./ProductHolder";
import CheckoutPreview from "./CheckoutPreview"
import { addItemToCart, removeItemFromCart } from '../utility/changeCartFunctions'

function Store({cart, setCart}) {
  return (
    <div className="store">
      <ProductHolder
        cart={cart}
        addToCartFunction={addToCartFunction}
        removeFromCartFunction={removeFromCartFunction}
      />
      <CheckoutPreview cart={cart}/>
    </div>
  )

  function addToCartFunction(name) {
    setCart(prevCart => addItemToCart(prevCart, name))
  }

  function removeFromCartFunction(name) {
    setCart(prevCart => removeItemFromCart(prevCart, name))
  }
}

export default Store;
