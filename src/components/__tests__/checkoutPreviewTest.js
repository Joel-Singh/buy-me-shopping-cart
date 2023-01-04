import CheckoutPreview from "../CheckoutPreview";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("CheckoutPreviewItem renders a single preview item", () => {
  const itemsInCart = [
    {
      name: "Me Smiling",
      price: 32,
      amountBought: 5,
      image: "placeholder",
    }
  ]

  render(<CheckoutPreview itemsInCart={itemsInCart} />)

  const previewItemContainer = screen.getByTestId("previewItemContainer")

  expect(previewItemContainer).toMatchSnapshot()
})

test("CheckoutPreviewItem renders multiple items", () => {
  const itemsInCart = [
    {
      name: "Me Smiling",
      price: 32,
      amountBought: 5,
      image: "placeholder",
    },
    {
      name: "Me With a frown",
      price: 65,
      amountBought: 2,
      image: "placeholder",
    },
    {
      name: "Me",
      price: 19,
      amountBought: 4,
      image: "placeholder",
    }
  ]

  render(<CheckoutPreview itemsInCart={itemsInCart} />)

  const previewItemContainer = screen.getByTestId("previewItemContainer")

  expect(previewItemContainer).toMatchSnapshot()
})
