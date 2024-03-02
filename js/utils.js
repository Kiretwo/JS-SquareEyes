export function calculateTotal(cart) {
  return cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
}



// Function to update cart in localStorage
export const updateCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};


// Function to format a movie for the cart
export const formatMovieForCart = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    price: movie.price,
  };
};