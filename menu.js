const boxes = document.querySelectorAll('.box-meat');


boxes.forEach((box) => {
  const productId = box.getAttribute('data-product-id');
  const modal = document.querySelector(`#modal-${productId}`);

  box.addEventListener('click', (event) => {
    console.log('box clicked');
    modal.classList.add('open');
    event.stopPropagation();
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.modal-content')) {
        modal.classList.remove('active');
    }
    
   
  });

 
});

const cartIcon = document.querySelector('.cart-icon');
const cartContainer = document.querySelector('.cart-container');
const addToCartButtons = document.querySelectorAll('.box-meat .add-to-cart');

// Create an empty cart array to store products
let cart = [];

// Update the cart icon count
function updateCartIconCount() {
  const cartCount = document.querySelector('.cart-count');
  cartCount.innerText = cart.length;
}

// Add product to cart and update cart icon count
function addToCart(product) {
  cart.push(product);
  updateCartIconCount();
}

// Add click event listener to cart icon
cartIcon.addEventListener('click', () => {
  cartContainer.classList.toggle('show');
});

// Add click event listener to all Add to Cart buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get product details from the button's parent element
    const productElement = button.parentElement;
    const productImage = productElement.querySelector('img').src;
    const productName = productElement.querySelector('.product-name').innerText;
    const productPrice = productElement.querySelector('.product-price').innerText;

    const product = {  image: productImage,name: productName, price: productPrice };

    // Add product to cart
    addToCart(product);

    // Create a new cart item element and add it to the cart
    const cartItems = document.querySelector('.cart-items');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
    
      <div class="cart-item-details">
        <img src="${product.image}" alt="${product.name}">
        <h4>${productName}</h4>
        <p>${productPrice}</p>
      </div>
    `;
    cartItems.appendChild(cartItem);

    // Calculate and display the cart total
    const cartTotal = document.querySelector('.cart-total');
    const total = cart.reduce((sum, product) => sum + parseFloat(product.price.replace(/[^0-9.-]+/g,"")), 0);
    cartTotal.innerText = `Total: ₱${total.toFixed(2)}`;

    // Close the modal
    const modalOverlay = productElement.parentElement;
    modalOverlay.classList.remove('show');
  });
});


