'use client';
import React, { createContext, useState, useContext } from 'react';
import type { CartProduct, CartProducts, Product } from '../types';

interface CartContextType {
  children: React.ReactNode;
}

interface CartContextValue {
  cart: CartProducts;
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
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
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === item.id);

      if (existing) {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: (p.quantity || 0) + 1 } : p,
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item: Product) => {
    setCart((prevCart) =>
      prevCart
        .map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0),
    );
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
