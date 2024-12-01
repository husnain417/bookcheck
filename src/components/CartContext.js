import React, { createContext, useState, useEffect } from 'react';

// Create Cart Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, isNewAddition = true) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { 
                ...item, 
                quantity: item.quantity + (product.quantity || 1) 
              }
            : item
        );
      }
      if (isNewAddition) {
        alert(`${product.title} has been added to the cart!`);
      }
      
      return [...prevItems, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.id !== productId);
      // Immediately update localStorage with the new cart
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Method to clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};