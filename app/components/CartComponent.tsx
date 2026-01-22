'use client';
import { clear } from 'console';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../types';

export default function CartComponent() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleRemove = (item: Product) => {
    console.log('clicked');
    removeFromCart(item);
  };
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      {cart.length < 1 ? (
        <h2>No items in cart</h2>
      ) : (
        cart.map((cartItem) => {
          return (
            <div
              key={cartItem.id}
              className=" bg-amber-600 flex flex-col w-2xs h-[300px]"
            >
              <h2>{cartItem.title}</h2>
              <img
                src={cartItem.image}
                className="max-h-[200px] max-w-[200px]"
              />
              <p>{cartItem.price}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <button
                onClick={() => handleRemove(cartItem)}
                className="hover:cursor-pointer"
              >
                Remove
              </button>
            </div>
          );
        })
      )}

      {cart.length >= 1 ? (
        <button onClick={clearCart} className="hover:cursor-pointer mt-8">
          Clear cart
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
