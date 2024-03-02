const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

const orderDetailsContainer = document.getElementById('order-details');
orderDetailsContainer.innerHTML = `
  <p>Email: ${orderDetails.email}</p>
  <!-- Include other order details as needed -->
`;