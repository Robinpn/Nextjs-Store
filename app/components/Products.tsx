'use client';
import { use, useState } from 'react';
import type { storeProducts } from '../types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { read } from 'fs';

const Products = ({ productsData }) => {
  const products: storeProducts = use(productsData);
  const [productId, setProductid] = useState(0);
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] =
    useState<storeProducts>(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();

  const categories = [...new Set(products?.map((p) => p.category) || [])];

  const handleClick = (id: number) => {
    router.push(`/Products/${id.toString()}`);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter(value);
    const hej = products?.filter((product) => product.title.includes(filter));
    setFilteredProducts(hej);

    if (value == '') {
      setFilteredProducts(products);
    }
  };

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="flex flex-row gap-4 items-center justify-center">
        <input
          type="text"
          value={filter}
          onChange={handleInput}
          className="bg-white text-black h-[30] w-[150] rounded-2xl p-3 flex justify-center items-center"
        />
        {categories.length > 0 ? (
          <select
            name="category"
            id="category"
            defaultValue="category"
            onChange={handleCategory}
            className="bg-gray-900 w-36 h-10 rounded-2xl text-center"
          >
            <option value="category">category</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        ) : (
          <p>Loading</p>
        )}
      </div>
      <div className="flex flex-wrap gap-4">
        {filteredProducts?.map((product) => {
          return (
            <div
              key={product.id}
              className="max-w-[300px] max-h-[300px] border-2 border-b-white rounded-md flex flex-col justify-center items-center hover:cursor-pointer"
              onClick={() => handleClick(product.id)}
            >
              <h3>{product.title}</h3>
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
    </div>
  );
};

export default Products;
