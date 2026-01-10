import React from 'react';
import { useCart } from '../contexts/CartContext';

export const Cart = () => {
  const { cart } = useCart();
  return <div>
    {cart.map((cartItem) => {
        return (
            <div key={cartItem.id}>
                <h1>{cartItem.}</h1>
            </div>
        )
    })}
  </div>;
};
