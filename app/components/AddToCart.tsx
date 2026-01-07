'use client';
import React, { useEffect } from 'react';
import { addToCart, getSingleCart } from '../utils/createUser';

export const AddToCart = () => {
  const [pressed, setPressed] = React.useState(false);
  const [cart, setCart] = React.useState(null);

  useEffect(() => {
    const getCart = async () => {
      const cart = await getSingleCart(1);
      setCart(cart);
    };

    getCart();
  }, [pressed]);

  console.log('cart: ', cart);
  return (
    <div>
      <button
        onClick={() => {
          addToCart();
        }}
      >
        Add to cart
      </button>

      <button onClick={() => setPressed(true)}>Get Cart</button>
    </div>
  );
};
