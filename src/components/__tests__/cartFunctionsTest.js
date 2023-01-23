import { addItemToCart, removeItemFromCart } from './../../utility/changeCartFunctions.js'
import { createCartItem } from './../../utility/cartCreationFunctions'

test("Add single item to cart", () => {
  let itemsInCart = [
    createCartItem("Me Smiling", 32, 5, "placeholder"),
    createCartItem("Me With a frown", 65, 2, "placeholder"),
    createCartItem("Me", 19, 4, "placeholder"),
  ]

  itemsInCart = addItemToCart(itemsInCart, "Me Smiling")

  const meSmiling = itemsInCart[0];

  expect(meSmiling.amountBought).toEqual(6);
})


test("Remove single item from cart", () => {
  let itemsInCart = [
    createCartItem("Me Smiling", 32, 5, "placeholder"),
    createCartItem("Me With a frown", 65, 2, "placeholder"),
    createCartItem("Me", 19, 4, "placeholder"),
  ]

  itemsInCart = removeItemFromCart(itemsInCart, "Me Smiling")

  const meSmiling = itemsInCart[0];

  expect(meSmiling.amountBought).toEqual(4);
})



test("addItemToCart is non-mutating", () => {
  let itemsInCart = [
    createCartItem("Me Smiling", 32, 5, "placeholder"),
    createCartItem("Me With a frown", 65, 2, "placeholder"),
    createCartItem("Me", 19, 4, "placeholder"),
  ]

  addItemToCart(itemsInCart, "Me Smiling")

  const meSmiling = itemsInCart[0];

  expect(meSmiling.amountBought).toEqual(5);
})

test("removeItemFromCart is non-mutating", () => {
  let itemsInCart = [
    createCartItem("Me Smiling", 32, 5, "placeholder"),
    createCartItem("Me With a frown", 65, 2, "placeholder"),
    createCartItem("Me", 19, 4, "placeholder"),
  ]

  removeItemFromCart(itemsInCart, "Me Smiling")

  const meSmiling = itemsInCart[0];

  expect(meSmiling.amountBought).toEqual(5);
})
