'use client';
import { use } from 'react';
import type { Product, storeProducts } from '../types';

const Products = ({ productsData }) => {
  //   const products = await getProducts();
  const products: storeProducts = use(productsData);
  return (
    <div>
      {products.map((product: Product, index: number) => {
        return (
          <div key={index}>
            <h3>{product.title}</h3>
            <img
              className="w-[200px] h-[200px]"
              src={product.image}
              alt="product image"
            />
            <p>{product.category}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
