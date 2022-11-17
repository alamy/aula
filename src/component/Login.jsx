import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../contexts/loginContext";
import "./../styles/components/login.sass";
import { Send } from "@mui/icons-material";
import { Theme } from "./../theme/index";

function Login() {
  const login = useContext(LoginContext);

  return (
    <div className="row">
      <form className="col s10 offset-s1">
        <div className="row headerLogin">
          Olá! Seja bem vindo a nossa plataforma.
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onKeyUp={(e) => login.setLogin(e.target.value)}
              id="text"
              type="email"
              className="validate"
              required
            />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              onKeyUp={(e) => login.setPassword(e.target.value)}
              id="password"
              type="password"
              className="validate"
              required
            />
            <label for="password">Password</label>
          </div>
        </div>
        <IconButton>
          <Button
            onClick={(e) => login.sendLogin(e, login.login, login.password)}
            variant="contained"
            size="large"
            endIcon={<Send />}
            style={{ backgroundColor: Theme.palette.primary.main }}
          >
            Enviar
          </Button>
        </IconButton>
      </form>
    </div>
  );
}
export default Login;
