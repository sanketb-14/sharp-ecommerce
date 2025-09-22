import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        return prev.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeProduct(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Outside Context");
  }
  return context;
}
