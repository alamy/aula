import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AboutPages from './pages/AboutPage';
import NavBar from './component/NavBar';
import Usuario from './pages/Usuario';
import { PrivateRoute } from './privateRoute';
import CountPage from './pages/CountPage';
import { LoginContext } from './contexts/loginContext';
import { useState } from 'react';


function App() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const sendLogin = async (event, login, password) => {
    event.preventDefault()    
    await localStorage.setItem('usuario',login)    
    await localStorage.setItem('password',password)    
    navigate('/usuario')
  }

  return (
       
          <LoginContext.Provider value={{login, setLogin, sendLogin, password, setPassword}}>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/usuario" element={<PrivateRoute><Usuario /></PrivateRoute>} />
              <Route path="/about" element={<AboutPages />} />
              <Route path="/atividades" element={<CountPage />} />
            </Routes>
          </LoginContext.Provider>
       
  )
}

export default App
