import { addItemToCart, removeItemFromCart } from './../../utility/changeCartFunctions.js'

test("Add single item to cart", () => {
  let itemsInCart = [
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

  itemsInCart = addItemToCart(itemsInCart, "Me Smiling")

  const meSmiling = itemsInCart[0];

  expect(meSmiling.amountBought).toEqual(6);
})


test("Remove single item from cart", () => {
  let itemsInCart = [
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

  itemsInCart = removeItemFromCart(itemsInCart, "Me Smiling")

  const meSmiling = itemsInCart[0];

  expect(meSmiling.amountBought).toEqual(4);
})



test("addItemToCart is non-mutating", () => {
  let itemsInCart = [
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

  addItemToCart(itemsInCart, "Me Smiling")

  const meSmiling = itemsInCart[0];

  expect(meSmiling.amountBought).toEqual(5);
})

test("removeItemFromCart is non-mutating", () => {
  let itemsInCart = [
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

  removeItemFromCart(itemsInCart, "Me Smiling")

  const meSmiling = itemsInCart[0];

  expect(meSmiling.amountBought).toEqual(5);
})
