'use client';
import { clear } from 'console';
import { useCart } from '../contexts/CartContext';
import { useEffect, useRef } from 'react';

export default function Page() {
  const { clearCart, cart } = useCart();
  const handleRef = useRef(false);

  useEffect(() => {
    if (handleRef.current) {
      return () => {
        clearCart();
      };
    }
    handleRef.current = true;
  }, [clearCart]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1>Thanks for shopping at fake store, hope to see you soon!</h1>
      <div className="flex flex-col items-center justify-center gap-4 bg-gray-300 text-black">
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col border-b-2 gap-4 max-w-52"
            >
              <h2>{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[200px] max-w-[200px]"
              />
              <p>Amount: {product.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
