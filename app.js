// SELECT ELEMENTS
const productsElement = document.querySelector(".products");

// RENDER PRODUCTS
const renderProducts = () => {
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

// cart array
let cart = [];

//ADD TOT CART
const addToCart = (id) => {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    alert("product already in cart");
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
    updateCart();
  }
};
