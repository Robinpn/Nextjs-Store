'use client';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../types';

export default function CartComponent() {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();

  const handleRemove = (item: Product) => {
    removeFromCart(item);
  };

  const handleAdd = (item: Product) => {
    addToCart(item);
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
              className="flex flex-col w-2xs min-h-[300px] justify-center items-center"
            >
              <h2>{cartItem.title}</h2>
              <img
                src={cartItem.image}
                className="max-h-[200px] max-w-[200px]"
              />
              <p>{cartItem.price}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <div>
                <button
                  onClick={() => handleRemove(cartItem)}
                  className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                >
                  -
                </button>
                <button
                  onClick={() => handleAdd(cartItem)}
                  className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                >
                  +
                </button>
              </div>
            </div>
          );
        })
      )}

      {cart.length >= 1 ? (
        <div className="my-4">
          <button
            onClick={clearCart}
            className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          >
            Clear cart
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
