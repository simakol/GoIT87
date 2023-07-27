function createMarkup(arr) {
  return arr.reduce(
    (markup, { id, img, price, name, description }) =>
      markup +
      `
<li data-id="${id}" class="product-card" id="product">
  <img src="${img}" alt="${name}" class="product-img"/>
  <h2 class="product-title">${name}</h2>
  <p class="product-description">${description}</p>
  <p class="product-price">${price} грн</p>
  <button class="product-add-btn" id="addBtn" type="button">Add to basket</button>
</li>   
  `,
    ""
  );
}

export { createMarkup };
