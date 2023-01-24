import placeHolderImage from "../assets/placeholder.png"
export function getInitialCart() {
  return (
    [
      createCartItem('Glasses', 12, 0, placeHolderImage),
      createCartItem('Strand of my hair', 50, 0, placeHolderImage),
      createCartItem('Programmer Bath Water in a Bottle', 30, 0, placeHolderImage),
      createCartItem('A shirt with my face', 5, 0, placeHolderImage),
      createCartItem('My empty, used toothpaste tube', 30, 0, placeHolderImage),
      createCartItem('My Used Razors', 30, 0, placeHolderImage),
      createCartItem('Donation', 500, 0, placeHolderImage),
      createCartItem('Jared', 200, 0, placeHolderImage),
      createCartItem(`Gum i've chewed`, 200, 0, placeHolderImage),
      createCartItem('Lightly used pickle ;)', 200, 0, placeHolderImage),
      createCartItem('My pet dog', 200, 0, placeHolderImage)
    ]
  )
}

export function createCartItem(name, price, amountBought, image) {
  return ({name, price, amountBought, image});
}
