import StoreProduct from "../StoreProduct";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("renders amount of 3 in cart", () => {
  render(<StoreProduct amountInCart="3" />)
  const amountDisplay = screen.getByTestId("Amount in cart")

  expect(amountDisplay.textContent).toBe("3")
})

it("renders amount of 5 in cart", () => {
  render(<StoreProduct amountInCart="5" />)
  const amountDisplay = screen.getByTestId("Amount in cart")

  expect(amountDisplay.textContent).toBe("5")
})



test("addToCart is called when button clicked", () => {
  const addToCartCallback = jest.fn()
  render(<StoreProduct onAddToCartClick={addToCartCallback}/>)

  const addToCartButton = screen.getByRole("button", { name: "Add to cart"})
  userEvent.click(addToCartButton)

  expect(addToCartCallback).toHaveBeenCalled()
})

test("addToCart is NOT called when amountInCart === productLimit", () => {
  const addToCartCallback = jest.fn()
  render(<StoreProduct amountInCart={3} productLimit={3} onAddToCartClick={addToCartCallback}/>)

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

test("removeFromCart is NOT called when amountInCart is 0", () => {
  const removeFromCartCallback = jest.fn()
  render(<StoreProduct amountInCart={0} onRemoveFromCartClick={removeFromCartCallback}/>)

  const removeFromCartButton = screen.getByRole("button", { name: "Remove from cart"})
  userEvent.click(removeFromCartButton)

  expect(removeFromCartCallback).toHaveBeenCalledTimes(0)
})