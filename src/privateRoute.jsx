import { useContext } from 'react';
import { Navigate } from 'react-router-dom'

export function PrivateRoute({children}) {
const usuario = localStorage.getItem('usuario');
const password = localStorage.getItem('password');

    localStorage.setItem('logged',false)
    if(usuario === 'wrm@cin.ufpe.br' && password === '123') {
        localStorage.setItem('logged',true)
    }  
    return localStorage.getItem('logged') ? children : <Navigate to="/" />;
}