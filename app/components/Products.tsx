'use client';
import { use, useEffect, useState } from 'react';
import type { storeProducts } from '../types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Products = ({ productsData }) => {
  const products: storeProducts = use(productsData);
  const [productId, setProductid] = useState(0);
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] =
    useState<storeProducts>(products);
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/Products/${id.toString()}`);
  };

  console.log(productId);

  const handleInput = (event) => {
    const value = event.target.value;
    setFilter(value);
    const hej = products?.filter((product) => product.title.includes(filter));
    setFilteredProducts(hej);

    if (value == '') {
      setFilteredProducts(products);
    }
  };
  return (
    <div className="flex flex-col justify-center gap-4 w-full md:flex-row flex-wrap">
      <div>
        <input
          type="text"
          value={filter}
          onChange={handleInput}
          className="bg-white text-black h-[30] w-[150] rounded-2xl p-3 flex justify-center items-center"
        />
      </div>
      {filteredProducts?.map((product) => {
        return (
          <div
            key={product.id}
            className="max-w-[300px] max-h-[300px] border-2 border-b-white rounded-md flex flex-col justify-center items-center hover:cursor-pointer"
            onClick={() => handleClick(product.id)}
          >
            <h3>{product.title}</h3>
            <p>{product.id}</p>
            {/* <img
              src={product.image}
              alt="product image"
              className="h-auto max-h-[150px] max-w-[150px] "
            /> */}
            <Image
              src={product.image}
              width={120}
              height={120}
              className="h-auto max-h-[150px] max-w-[150px] "
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
