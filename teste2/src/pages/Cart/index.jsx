import { useContext } from "react";
import { ProductContext } from "../../providers/Products";
import { CartContext } from "../../providers/Cart";
import { Container } from "./style";

import Button from "@mui/material/Button";
function Cart() {
  const store = useContext(CartContext);
  const currentCart = store.cart;
  const { removeFromCart, addToCart, cart } = useContext(CartContext);

  const value = cart.reduce((acc, atual) => {
    return atual.price + acc;
  }, 0);

  return (
    <Container>
      <div>
        {currentCart.map((value, index) => {
          return (
            <div key={index} className="cartList">
              <div>
                <img src={value.image} />
              </div>

              <div>
                <p>{value.name}</p>
                <p>R$: {value.price}</p>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    removeFromCart(value);
                  }}
                >
                  Remove from cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cartResume">
        <p>Resultado do pedido</p>
        <p>{cart.length} Produtos</p>
        <p>Total R$: {value}</p>
      </div>
    </Container>
  );
}

export default Cart;
