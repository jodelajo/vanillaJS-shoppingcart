// SELECT ELEMENTS
const productsElement = document.querySelector(".products");

// RENDER PRODUCTS
renderProducts = () => {
  products.forEach((product) => {
    productsElement.innerHTML += `
      <div class="item">
        <div class="item-container">
            <div class="item-img">
            <img src="${product.imgSrc}" alt="${product.name}" />
            </div>
            <div class="desc">
            <h2>${product.name}</h2>
            <h2><small>$</small>${product.price}</h2>
            <p>
               ${product.description}
            </p>
            </div>
            <div class="add-to-wishlist">
            <img src="./icons/heart.png" alt="add to wish list" />
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <img src="./icons/bag-plus.png" alt="add to cart" />
            </div>
        </div>
    </div>
      `;
  });
};
renderProducts();

//ADD TOT CART
addToCart = (id) => {
  console.log(id);
};
