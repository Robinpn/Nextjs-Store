'use client';
import { use, useState } from 'react';
import type { storeProducts } from '../types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Products = ({
  productsData,
}: {
  productsData: Promise<storeProducts>;
}) => {
  const products: storeProducts = use(productsData);

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
    const filteredProducts = products?.filter((product) =>
      product.title.includes(filter),
    );
    setFilteredProducts(filteredProducts);

    if (value == '') {
      setFilteredProducts(products);
    }
  };

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedCategory(value);

    const productsByCategory = products?.filter(
      (products) => products.category === value,
    );

    if (value != 'category') {
      setFilteredProducts(productsByCategory);
    } else {
      setFilteredProducts(products);
    }
  };

  console.log('products: ', products);

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
              className="w-80 h-80 bg-gray-900 rounded-md flex flex-col justify-center items-center hover:cursor-pointer"
              onClick={() => handleClick(product.id)}
            >
              <h3>{product.title}</h3>
              <Image
                loading="eager"
                src={product.image}
                width={125}
                height={125}
                className="w-auto h-auto"
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
