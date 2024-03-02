import { updateCart, calculateTotal } from './utils.js';

const cartContainer = document.getElementById('cart-container');


function renderCart(cart) {
  cartContainer.innerHTML = ''; 

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

function removeFromCart(movieId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = cart.filter(item => item.id !== movieId);
  updateCart(updatedCart);
  renderCart(updatedCart);
}

cartContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-from-cart-btn')) {
    const movieId = event.target.dataset.id;
    removeFromCart(movieId);
    window.location.reload();
  }
});

const cart = JSON.parse(localStorage.getItem('cart')) || [];

renderCart(cart);

const checkoutButton = document.getElementById('checkout-btn');

checkoutButton.addEventListener('click', function () {
  if (cart.length === 0) {
    alert("Your cart is empty! Please add something to your cart if you wish to proceed.")
  } else {
      // Redirect to the checkout page
      window.location.href = 'checkout.html';
  } 
});