'use client';
import React from 'react';
import { useCart } from '../contexts/CartContext';
import type { Product, CartProduct } from '../types';

interface AddToCartProps {
  product: Product;
}

export const AddToCart = ({ product }: AddToCartProps) => {
  const { addToCart, cart } = useCart();

  const handleAdd = () => {
    addToCart(product);

    console.log('cart', cart);
  };

  return (
    <div>
      <button
        className="h-14 w-28 rounded-2xl bg-green-900 hover:cursor-pointer"
        onClick={handleAdd}
      >
        Add to cart
      </button>
    </div>
  );
};
