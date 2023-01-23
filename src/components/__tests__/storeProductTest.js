import StoreProduct from "../StoreProduct";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("addToCart is called when button clicked", () => {
  const addToCartCallback = jest.fn()
  render(<StoreProduct onAddToCartClick={addToCartCallback}/>)

  const addToCartButton = screen.getByRole("button", { name: "Add to cart"})
  userEvent.click(addToCartButton)

  expect(addToCartCallback).toHaveBeenCalled()
})

test("addToCart is NOT called when amountBought === productLimit", () => {
  const addToCartCallback = jest.fn()
  render(<StoreProduct amountBought={3} productLimit={3} onAddToCartClick={addToCartCallback}/>)

  const addToCartButton = screen.getByRole("button", { name: "Add to cart"})
  userEvent.click(addToCartButton)

  expect(addToCartCallback).toHaveBeenCalledTimes(0)
})



test("removeFromCart is called when button clicked", () => {
  const removeFromCartCallback = jest.fn()
  render(<StoreProduct onRemoveFromCartClick={removeFromCartCallback}/>)

  const removeFromCartButton = screen.getByRole("button", { name: "Remove from cart"})
  userEvent.click(removeFromCartButton)

  expect(removeFromCartCallback).toHaveBeenCalled()
})

test("removeFromCart is NOT called when amountBought is 0", () => {
  const removeFromCartCallback = jest.fn()
  render(<StoreProduct amountBought={0} onRemoveFromCartClick={removeFromCartCallback}/>)

  const removeFromCartButton = screen.getByRole("button", { name: "Remove from cart"})
  userEvent.click(removeFromCartButton)

  expect(removeFromCartCallback).toHaveBeenCalledTimes(0)
})
