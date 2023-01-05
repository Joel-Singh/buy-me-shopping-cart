import ProductHolder from "../ProductHolder";
import { render, screen } from "@testing-library/react";
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
