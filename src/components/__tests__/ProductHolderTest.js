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

test("Product Holder properly adds addToCartFunction to a single product", () => {
  const smileProduct = { name: "smile" }
  const productList = [
    smileProduct
  ];

  const addToCartFunction = jest.fn();

  render(
    <ProductHolder
      productList={productList}
      addToCartFunction={addToCartFunction}
    />
  )

  const smileProductElement = screen.getByText(smileProduct.name).parentElement
  const addToCartButton = getByRole(smileProductElement, 'button', {name: "Add to cart"})

  userEvent.click(addToCartButton)

  expect(addToCartFunction).toBeCalledWith("smile")
})

test("Product Holder properly adds addToCartFunction to multiple products", () => {
  const smileProduct = { name: "smile" }
  const frownProduct = { name: "frown" }
  const terrorProduct = {name: "terror" }

  const productList = [
    smileProduct,
    frownProduct,
    terrorProduct,
  ];

  const addToCartFunction = jest.fn();

  render(
    <ProductHolder
      productList={productList}
      addToCartFunction={addToCartFunction}
    />
  )

  function getAddToCartButton(name) {
    const productElement = screen.getByText(name).parentElement
    const addToCartButton = getByRole(productElement, 'button', {name: "Add to cart"})
    return addToCartButton
  }

  const smileAddToCartButton = getAddToCartButton("smile")
  const frownAddToCartButton = getAddToCartButton("frown")
  const terrorAddToCartButton = getAddToCartButton("terror")

  userEvent.click(smileAddToCartButton)
  userEvent.click(frownAddToCartButton)
  userEvent.click(terrorAddToCartButton)

  expect(addToCartFunction).toBeCalledTimes(3)
  expect(addToCartFunction).toBeCalledWith("smile")
  expect(addToCartFunction).toBeCalledWith("frown")
  expect(addToCartFunction).toBeCalledWith("terror")
})

