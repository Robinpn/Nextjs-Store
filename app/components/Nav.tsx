'use client';
import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export const Nav = () => {
  const { cart } = useCart();

  return (
    <div className="w-screen min-h-16 flex flex-row items-center justify-between bg-blend-darken">
      <div>Logo</div>
      <div className="flex flex-row items-center relative justify-between mr-4 w-[300px]">
        <Link href={'/'} className="">
          Home
        </Link>
        <Link href={'/Products'} className="">
          products
        </Link>
        <div className="flex flex-row relative w-8 h-8 items-center justify-center">
          <Link href={'/cart'} className="">
            <ShoppingCart size={20} />
          </Link>
          {cart.length >= 1 ? (
            <span className="absolute top-0 right-[-4]">{cart.length}</span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
};
