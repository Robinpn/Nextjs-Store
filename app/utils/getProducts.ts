export const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return products;
};
