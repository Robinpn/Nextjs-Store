import { Product } from '@/app/types';
import Image from 'next/image';

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
      <div className="flex flex-col gap-4 w-3xs">
        <h1>{product?.title}</h1>
        <Image
          src={product.image}
          width={120}
          height={120}
          className="h-auto max-h-[150px] max-w-[150px] border-2 border-white rounded-2xl"
          alt="product image"
        />
        <p>Rating: {product.rating.rate}</p>
        <p>${product.price}</p>
        <p>In stock: {product.rating.count}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
