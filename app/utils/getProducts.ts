export const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error(
        `Unable to fetch products, pls come back later ${response.status}`,
      );
      // return [];
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.log('error: ', error);
    throw new Error('Unable to fetch products, pls come back later');
    // console.error(error);
    // return [];
  }
};
