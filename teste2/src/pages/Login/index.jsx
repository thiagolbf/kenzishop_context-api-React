import { Container } from "./style";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  function changeToProducts() {
    history.push("/products");
  }

  return (
    <Container>
      <h3>LOGIN</h3>
      <Stack spacing={2} mt={2}>
        <TextField size="small" label="Usuário" />
        <TextField size="small" label="Email" />
      </Stack>
      <Stack direction="row" spacing={3} mt={2}>
        <Button size="small" variant="contained" onClick={changeToProducts}>
          Ir p/ produtos
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            alert("Essa aplicação não possui essa funcionalidade");
          }}
        >
          Entrar
        </Button>
      </Stack>
    </Container>
  );
}

export default Login;
