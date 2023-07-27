function createMarkup(arr) {
  return arr.reduce(
    (markup, { img, price, name, quantity }) =>
      markup +
      `
    <li class="cart-item">
      <img src="${img}" alt="${name}" class="product-img"/>
      <h2>${name}</h2>
      <p>Quantity: ${quantity}</p>
      <p>Total price: ${quantity * price} грн</p>
  </li>
      `,
    ""
  );
}

export { createMarkup };
