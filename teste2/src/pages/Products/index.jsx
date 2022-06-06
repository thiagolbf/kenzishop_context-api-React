import { useContext } from "react";
import { ProductContext } from "../../providers/Products";
import { CartContext } from "../../providers/Cart";
import { Container } from "./style";
import Button from "@mui/material/Button";

function Products() {
  const productStore = useContext(ProductContext);
  const products = productStore.products;
  const { addToCart } = useContext(CartContext);
  console.log(products);

  return (
    <Container>
      {products.map((value, index) => {
        return (
          <div key={index} className="productList">
            <img src={value.image} />
            <p>{value.name}</p>
            <p>{value.price}</p>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                addToCart(value);
              }}
            >
              Add to Cart
            </Button>
          </div>
        );
      })}
    </Container>
  );
}

export default Products;
