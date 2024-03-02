export function calculateTotal(cart) {
  return cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

export const updateCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const formatMovieForCart = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    price: movie.price,
  };
};