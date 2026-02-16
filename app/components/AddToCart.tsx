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
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        onClick={handleAdd}
      >
        Add to cart
      </button>
    </div>
  );
};
