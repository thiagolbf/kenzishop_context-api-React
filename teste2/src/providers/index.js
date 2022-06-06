import { ProductProvider } from "./Products";
import { CartProvider } from "./Cart";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <ProductProvider>{children}</ProductProvider>
    </CartProvider>
  );
};

export default Providers;
