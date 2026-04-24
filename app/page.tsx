import Link from 'next/link';
import type { storeProducts, Product } from './types';
import { getProducts } from './utils/getProducts';
import Image from 'next/image';

export default async function Home() {
  const products = await getProducts();

  const randomProducts = (arr: storeProducts): storeProducts => {
    if (!arr) {
      return [];
    }
    const featuredList = [...arr].sort(() => 0.5 - Math.random());
    return featuredList.slice(0, 2);
  };

  const items = randomProducts(products);
  console.log(items);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="h-full w-full  py-32 px-16 flex flex-col gap-4 justify-center items-center">
        <section className="w-full h-80 flex flex-col justify-center items-center">
          <h1 className="text-2xl">Everything you need, in one place</h1>
          <h2 className="text-xl">Fashion, electronics, and more</h2>
          <Link href="/Products" className="text-blue-500 hover:cursor-pointer">
            Shop now
          </Link>
        </section>

        <section className="w-full h-96 flex flex-col justify-center items-center gap-6">
          <p>Some of our featured products!</p>
          <div className="flex justify-center items-center gap-6">
            {items?.map((item) => (
              <div
                key={item.id}
                className="w-40 h-40 bg-gray-900 rounded-md flex flex-col justify-center items-center"
              >
                <Image
                  loading="eager"
                  src={item.image}
                  width={95}
                  height={95}
                  className="w-auto h-auto"
                  alt="product image"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="w-full h-40 flex flex-col justify-center items-center">
          <Link href="/Products" className="text-blue-500 hover:cursor-pointer">
            Browse all products
          </Link>
        </section>
      </main>
    </div>
  );
}
