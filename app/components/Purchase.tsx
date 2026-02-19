'use client';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useCart } from '../contexts/CartContext';

export const Purchase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { clearCart } = useCart();

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      clearCart();
      redirect('/EndScreen');
    }, 1500);
  };
  return (
    <>
      {isLoading ? (
        <button
          disabled={isLoading}
          className="rounded-md flex flex-row justify-center items-center bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          <LoaderCircle className="animate-spin" />
        </button>
      ) : (
        <button
          className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          onClick={handleClick}
        >
          Purchase
        </button>
      )}
    </>
  );
};
