import { Suspense } from 'react';
import Products from './components/Products';
import { LoaderCircle } from 'lucide-react';
import { getProducts } from './utils/getProducts';

export default function Home() {
  const productPromise = getProducts();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen min-w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Home</h1>
        <Suspense
          fallback={
            <span className="animate-spin">
              <LoaderCircle />
            </span>
          }
        >
          <Products productsData={productPromise} />
        </Suspense>
      </main>
    </div>
  );
}
