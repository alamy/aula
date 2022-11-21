import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPages from './pages/AboutPage';
import NavBar from './component/NavBar';
import Usuario from './pages/Usuario';
import Ref from './pages/refPage';
import ContadorPage from './pages/ContadorPage';
import { PrivateRoute } from './privateRoute';

function App() {
  return (
      <Router>
          <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/usuario" element={<PrivateRoute><Usuario /></PrivateRoute>} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/contador" element={<ContadorPage />} />
        </Routes>
      </Router>
  );
}

export default App;