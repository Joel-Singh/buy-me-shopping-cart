import ProductHolder from "../ProductHolder";
import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createCartItem } from "../../utility/cartCreationFunctions";

test("Product holder properly renders a single product", () => {
  const cart = [
    createCartItem("Me smiling", 0, 5, "placeholder")
  ];

  const { container : productHolder } = render(<ProductHolder cart={cart} />)

  expect(productHolder).toMatchSnapshot()
})


test("Product holder properly renders three products", () => {
  const cart = [
    createCartItem("Frown", 0, 9, "frown placeholder"),
    createCartItem("Smile", 0, 2, "smile placeholder"),
    createCartItem("Depression", 0, 6, "depression placeholder"),
  ];

  const { container : productHolder } = render(<ProductHolder cart={cart} />)

  expect(productHolder).toMatchSnapshot()
})

test("Cart functions of a single Product within a Product Holder are called when clicked", () => {
  const smileProduct = createCartItem("smile", 0, 5, "placeholder")
  const cart = [
    smileProduct
  ];

  const addToCartFunction = jest.fn();
  const removeFromCartFunction = jest.fn();

  render(
    <ProductHolder
      cart={cart}
      addToCartFunction={addToCartFunction}
      removeFromCartFunction={removeFromCartFunction}
    />
  )

  const smileProductElement = screen.getByText(smileProduct.name).parentElement
  const addToCartButton = getByRole(smileProductElement, 'button', {name: "Add to cart"})
  const removeFromCartButton = getByRole(smileProductElement, 'button', {name: "Remove from cart"})

  userEvent.click(addToCartButton)
  userEvent.click(removeFromCartButton)

  expect(addToCartFunction).toBeCalledWith("smile")
  expect(removeFromCartFunction).toBeCalledWith("smile")
})

test("Cart functions of a multiple Products within a Product Holder are called when clicked", () => {
  const smileProduct = createCartItem("smile", 0, 5, "placeholder")
  const frownProduct = createCartItem("frown", 0, 5, "placeholder")
  const terrorProduct = createCartItem("terror", 0, 5, "placeholder")

  const cart = [
    smileProduct,
    frownProduct,
    terrorProduct,
  ];

  const addToCartFunction = jest.fn();
  const removeFromCartFunction = jest.fn();

  render(
    <ProductHolder
      cart={cart}
      addToCartFunction={addToCartFunction}
      removeFromCartFunction={removeFromCartFunction}
    />
  )

  function getAddToCartButton(name) {
    const productElement = screen.getByText(name).parentElement
    const addToCartButton = getByRole(productElement, 'button', {name: "Add to cart"})
    return addToCartButton
  }

  function getRemoveFromCartButton(name) {
    const productElement = screen.getByText(name).parentElement
    const removeFromCartButton = getByRole(productElement, 'button', {name: "Remove from cart"})
    return removeFromCartButton
  }

  const smileAddToCartButton = getAddToCartButton("smile")
  const frownAddToCartButton = getAddToCartButton("frown")
  const terrorAddToCartButton = getAddToCartButton("terror")

  const smileRemoveFromCartButton = getRemoveFromCartButton("smile")
  const frownRemoveFromCartButton = getRemoveFromCartButton("frown")
  const terrorRemoveFromCartButton = getRemoveFromCartButton("terror")

  userEvent.click(smileAddToCartButton)
  userEvent.click(frownAddToCartButton)
  userEvent.click(terrorAddToCartButton)

  userEvent.click(smileRemoveFromCartButton)
  userEvent.click(frownRemoveFromCartButton)
  userEvent.click(terrorRemoveFromCartButton)

  expect(addToCartFunction).toBeCalledTimes(3)
  expect(addToCartFunction).toBeCalledWith("smile")
  expect(addToCartFunction).toBeCalledWith("frown")
  expect(addToCartFunction).toBeCalledWith("terror")

  expect(removeFromCartFunction).toBeCalledTimes(3)
  expect(removeFromCartFunction).toBeCalledWith("smile")
  expect(removeFromCartFunction).toBeCalledWith("frown")
  expect(removeFromCartFunction).toBeCalledWith("terror")
})

