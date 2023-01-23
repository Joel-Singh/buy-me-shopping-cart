import CheckoutPreview from "../CheckoutPreview";
import { render, screen } from "@testing-library/react";
import { createCartItem } from './../../utility/cartCreationFunctions'
import userEvent from "@testing-library/user-event";

test("CheckoutPreviewItem renders a single preview item", () => {
  const itemsInCart = [
    createCartItem("Me Smiling", 32, 5, "placeholder"),
  ]

  render(<CheckoutPreview itemsInCart={itemsInCart} />)

  const previewItemContainer = screen.getByTestId("previewItemContainer")

  expect(previewItemContainer).toMatchSnapshot()
})

test("CheckoutPreviewItem renders multiple items", () => {
  const itemsInCart = [
    createCartItem("Me Smiling", 32, 5, "placeholder"),
    createCartItem("Me With a frown", 65, 2, "placeholder"),
    createCartItem("Me", 19, 4, "placeholder"),
  ]

  render(<CheckoutPreview itemsInCart={itemsInCart} />)

  const previewItemContainer = screen.getByTestId("previewItemContainer")

  expect(previewItemContainer).toMatchSnapshot()
})

test("CheckoutPreview renders total cost", () => {
  const itemsInCart = [
    createCartItem("Me Smiling", 32, 5, "placeholder"),
    createCartItem("Me With a frown", 65, 2, "placeholder"),
    createCartItem("Me", 19, 4, "placeholder"),
  ]

  render(<CheckoutPreview itemsInCart={itemsInCart} />)
  const totalHTMLContainer = screen.getByText("Total Cost", {exact: false})
  expect(totalHTMLContainer).toMatchSnapshot()
})
