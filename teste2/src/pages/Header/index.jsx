import { Container } from "./style";
import { AiOutlineLogin } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { useHistory } from "react-router-dom";

import { CartContext } from "../../providers/Cart";

import { useContext } from "react";

function Header() {
  const history = useHistory();

  function changeToProducts() {
    history.push("/products");
  }

  function changeToCart() {
    history.push("/cart");
  }

  function changeToLogin() {
    history.push("/");
  }

  const { cart } = useContext(CartContext);

  return (
    <Container>
      <h2 onClick={changeToProducts}>kenzie Shop</h2>

      <nav>
        <ul>
          <li onClick={changeToCart}>
            carrinho
            <Badge badgeContent={cart.length} color="secondary">
              <BsCart />
            </Badge>
          </li>
          <li onClick={changeToLogin}>
            entraar <AiOutlineLogin />
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
