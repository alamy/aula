import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPage";
import NavBar from "./component/NavBar";
import Usuario from "./pages/Usuario";
import { PrivateRoute } from "./privateRoute";
import ActivitiesPage from "./pages/ActivitiesPage";
import { LoginContext } from "./contexts/loginContext";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState("");
  const [userLogged, setUserLogged] = useState({});
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [listUsers, setListUsers] = useState([
    {
      name: "Wanderson R Marques",
      password: "123",
      image: "https://avatars.githubusercontent.com/u/32652021?v=4",
      phone: "(81) 99824-4913",
      email: "wrm@cin.ufpe.br",
    },
    {
      name: "Alamy Verissimo P. Neto",
      password: "123",
      image: "https://avatars.githubusercontent.com/u/6362486?v=4",
      phone: "(81) 98656-3871",
      email: "alamy.nt@gmail.com",
    },
    {
      name: "Charles Muniz",
      password: "123",
      image:
        "https://pps.whatsapp.net/v/t61.24694-24/217888526_430775071286014_5802203121836892304_n.jpg?ccb=11-4&oh=01_AdTWwjYnTibD0UijhbkvSu-NB1Vmq3Rq4P9dKdHc7OJ2oQ&oe=63837C83",
      phone: "(81) 98802-0893",
      email: "charlesmuniz@gmail.com",
    },
  ]);

  const sendLogin = async (event, login, password) => {
    event.preventDefault();
    await localStorage.setItem("usuario", login);
    await localStorage.setItem("password", password);
    navigate("/usuario");
  };

  const loggout = async (event) => {
    event.preventDefault();
    await localStorage.setItem("usuario", null);
    await localStorage.setItem("password", null);
    await localStorage.setItem("logged", false);
    await setUserLogged({});
    location.reload();
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        setLogin,
        sendLogin,
        password,
        setPassword,
        listUsers,
        userLogged,
        setUserLogged,
        loggout,
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/usuario"
          element={
            <PrivateRoute>
              <Usuario />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/atividades" element={<ActivitiesPage />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
