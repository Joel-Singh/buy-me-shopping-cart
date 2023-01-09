import ProductHolder from "../ProductHolder";
import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Product holder properly renders a single product", () => {
  const productList = [
    {
      amountInCart: 5,
      image: "placeholder",
      name: "Me smiling",
    }
  ];

  const { container : productHolder } = render(<ProductHolder productList={productList} />)

  expect(productHolder).toMatchSnapshot()
})


test("Product holder properly renders three products", () => {
  const productList = [
    {
      amountInCart: 9,
      image: "frown placeholder",
      name: "Frown",
    },
    {
      amountInCart: 2,
      image: "smile placeholder",
      name: "Smile",
    },
    {
      amountInCart: 6,
      image: "depression placeholder",
      name: "Depression",
    },
  ];

  const { container : productHolder } = render(<ProductHolder productList={productList} />)

  expect(productHolder).toMatchSnapshot()
})

test("Cart functions of a single Product within a Product Holder are called when clicked", () => {
  const smileProduct = { name: "smile" }
  const productList = [
    smileProduct
  ];

  const addToCartFunction = jest.fn();
  const removeFromCartFunction = jest.fn();

  render(
    <ProductHolder
      productList={productList}
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
  const smileProduct = { name: "smile" }
  const frownProduct = { name: "frown" }
  const terrorProduct = {name: "terror" }

  const productList = [
    smileProduct,
    frownProduct,
    terrorProduct,
  ];

  const addToCartFunction = jest.fn();
  const removeFromCartFunction = jest.fn();

  render(
    <ProductHolder
      productList={productList}
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

