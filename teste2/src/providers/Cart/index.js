import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );

  function addToCart(product) {
    const check = cart.includes(product);

    console.log(check);
    if (!check) {
      localStorage.setItem("carts", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    } else {
      alert("produto já adicionado");
    }
  }

  function removeFromCart(product) {
    const curentCart = JSON.parse(localStorage.getItem("carts"));
    const newCart = curentCart.filter((value) => {
      return value.name !== product.name;
    });

    localStorage.setItem("carts", JSON.stringify(newCart));
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
