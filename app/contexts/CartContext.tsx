'use client';
import React, { createContext, useState, useContext } from 'react';
import type { CartProduct, CartProducts, Product } from '../types';

interface CartContextType {
  children: React.ReactNode;
}

interface CartContextValue {
  cart: CartProducts;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export const CartProvider = ({ children }: CartContextType) => {
  const [cart, setCart] = useState<CartProducts>([]);

  const addToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
