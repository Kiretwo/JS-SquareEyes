// shopping-cart.js

import { updateCart, calculateTotal } from './utils.js';

const cartContainer = document.getElementById('cart-container');

// Function to render the shopping cart
function renderCart(cart) {
  cartContainer.innerHTML = ''; // Clear previous content

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      cartItem.innerHTML = `
        <div class="cart-item-details">
          <p>${item.title}</p>
          <p>Price: $${item.price}</p>
        </div>
        <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>
      `;

      cartContainer.appendChild(cartItem);
    });

    const total = calculateTotal(cart);

    const totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartContainer.appendChild(totalElement);
  }
}

// Function to remove a movie from the cart
function removeFromCart(movieId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = cart.filter(item => item.id !== movieId);
  updateCart(updatedCart);
  renderCart(updatedCart);
}

// Add event listener to the "Remove" button
cartContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-from-cart-btn')) {
    const movieId = event.target.dataset.id;
    removeFromCart(movieId);
  }
});

// Fetch the cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render the initial cart
renderCart(cart);

const checkoutButton = document.getElementById('checkout-btn');

checkoutButton.addEventListener('click', function () {
  // Redirect to the checkout page
  window.location.href = 'checkout.html';
});