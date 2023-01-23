export function getInitialCart() {
  return (
    [
      createCartItem('Glasses', 12, 0, 'glasses placeholder'),
      createCartItem('Strand of my hair', 50, 0, 'Strand of my hair placeholder'),
      createCartItem('Programmer Bath Water in a Bottle', 30, 0, 'Programmer Bath Water in a Bottle placeholder'),
      createCartItem('A shirt with my face', 5, 0, 'A shirt with my face placeholder'),
      createCartItem('My empty, used toothpaste tube', 0, 30, 'My empty, used toothpaste tube placeholder'),
      createCartItem('My Used Razors', 30, 0, 'My Used Razors placeholder'),
      createCartItem('Donation', 500, 0, 'Donation placeholder'),
      createCartItem('Jared', 200, 0, 'Jared placeholder'),
      createCartItem(`Gum i've chewed`, 200, 0, `Gum i've chewed placeholder`),
      createCartItem('Lightly used pickle ;)', 200, 0, 'Lightly used pickle ;) placeholder'),
      createCartItem('My pet dog', 200, 0, 'My pet dog placeholder')
    ]
  )
}

export function createCartItem(name, price, amountBought, image) {
  return ({name, price, amountBought, image});
}
