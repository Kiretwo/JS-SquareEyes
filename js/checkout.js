import { calculateTotal } from './utils.js';

const orderSummaryContainer = document.getElementById('order-summary-container');
const checkoutForm = document.getElementById('checkout-form');

const cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderOrderSummary(cart) {
  orderSummaryContainer.innerHTML = ''; 

  if (cart.length === 0) {
    orderSummaryContainer.innerHTML = '<p>Your order is empty.</p>';
  } else {
    cart.forEach(item => {
      const orderItem = document.createElement('div');
      orderItem.classList.add('order-item');

      orderItem.innerHTML = `
        <p>${item.title}</p>
        <p>Price: $${item.price}</p>
      `;

      orderSummaryContainer.appendChild(orderItem);
    });

    const total = calculateTotal(cart);

    const totalElement = document.createElement('div');
    totalElement.classList.add('order-total');
    totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    orderSummaryContainer.appendChild(totalElement);
  }
}

renderOrderSummary(cart);

checkoutForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Clear cart after placing order
  localStorage.removeItem('cart');

  // Redirect to order confirmation page
  window.location.href = 'order-confirmation.html';
});


