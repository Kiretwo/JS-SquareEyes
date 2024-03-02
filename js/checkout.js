/*
// Include any necessary functions or imports

const checkoutForm = document.getElementById('checkout-form');

checkoutForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Retrieve form data
  const email = document.getElementById('email').value;

  // You can include additional logic for payment information and other details

  // Save order details in localStorage or send to server
  const orderDetails = {
    email,
    // Include other details as needed
  };

  // Save order details in localStorage or send to server
  localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

  // Redirect to order confirmation page
  window.location.href = 'order-confirmation.html';
});
*/
// Create a new file named checkout.js and add the following code

// Import necessary functions or data from utils.js if needed
import { calculateTotal } from './utils.js';

const orderSummaryContainer = document.getElementById('order-summary-container');
const checkoutForm = document.getElementById('checkout-form');

// Fetch the cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the order summary
function renderOrderSummary(cart) {
  orderSummaryContainer.innerHTML = ''; // Clear previous content

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

// Render the order summary on page load
renderOrderSummary(cart);

// Add event listener to the checkout form
checkoutForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get user details from the form (e.g., email)
  const email = document.getElementById('email').value;

  // Perform any necessary actions (e.g., send order details to server, etc.)

  // Clear the cart after placing the order
  localStorage.removeItem('cart');

  // Redirect to order confirmation page
  window.location.href = 'order-confirmation.html';
});


