import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPage";
import NavBar from "./component/NavBar";
import Usuario from "./pages/Usuario";
import { PrivateRoute } from "./privateRoute";
import ContadorPage from "./pages/ContadorPage";
import ContadoresPage from "./pages/ContadoresPage";

function App() {
  return (
    <Router>
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
        <Route path="/contador" element={<ContadorPage />} />
        <Route path="/contadores" element={<ContadoresPage />} />
      </Routes>
    </Router>
  );
}

export default App;
