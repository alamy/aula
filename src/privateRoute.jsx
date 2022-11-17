import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "./contexts/loginContext";

export function PrivateRoute({ children }) {
  const usuario = localStorage.getItem("usuario");
  const password = localStorage.getItem("password");

  const listUsersContext = useContext(LoginContext);
  const users = listUsersContext.listUsers;

  const user = users.filter((u) => {
    if (usuario == u.email && password == u.password) {
      return true;
    }
    return false;
  });

  localStorage.setItem("logged", false);

  if (user.length) {
    if (usuario === user[0].email && password === user[0].password) {
      localStorage.setItem("logged", true);
      listUsersContext.setUserLogged(user[0]);
    } else {
      localStorage.setItem("logged", false);
      listUsersContext.setUserLogged({});
    }
  }

  return localStorage.getItem("logged") == "true" ? (
    children
  ) : (
    <Navigate to="/" />
  );
}
