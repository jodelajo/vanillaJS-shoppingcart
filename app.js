// SELECT ELEMENTS
const productsElements = document.querySelector(".products");
const cartItems = document.querySelector(".cart-items");

// RENDER PRODUCTS
const renderProducts = () => {
  products.forEach((product) => {
    productsElements.innerHTML += `
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

// ADD TOT CART
const addToCart = (id) => {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
};

// update cart
const updateCart = () => {
  renderCartItems();
  // renderSubTotal()
};

// render cart items
const renderCartItems = () => {
  cartItems.innerHTML = ""; // clear cart
  cart.forEach((item) => {
    cartItems.innerHTML += `
        <div class="cart-item">
            <div class="item-info">
              <img src="${item.imgSrc}" alt="${item.name}" />
              <h4>${item.name}</h4>
            </div>
            <div class="unit-price"><small>$</small>${item.price}</div>
            <div class="units">
              <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
              <div class="number">${item.numberOfUnits}</div>
              <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
            </div>
          </div>
        </div>
        `;
  });
};

// change number of units for an item
const changeNumberOfUnits = (action, id) => {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
};
