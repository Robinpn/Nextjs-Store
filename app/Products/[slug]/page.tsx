import { Product } from '@/app/types';
import Image from 'next/image';
import { AddToCart } from '@/app/components/AddToCart';
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetch(`https://fakestoreapi.com/products/${slug}`);
  const product: Product = await data.json();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="w-80 flex flex-col gap-2 justify-center items-center">
        <h1>{product?.title}</h1>
        <Image
          src={product.image}
          width={300}
          height={300}
          className="h-auto w-auto rounded-2xl"
          alt="product image"
        />
        <p className="text-amber-300">Rating: {product.rating.rate}</p>
        <p>${product.price}</p>
        <p>In stock: {product.rating.count}</p>
        <p>{product.description}</p>
      </div>
      <div className="mt-3.5">
        <AddToCart product={product} />
      </div>
    </div>
  );
}
