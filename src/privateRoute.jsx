import { Navigate } from 'react-router-dom'

export function PrivateRoute({children}) {
const usuario = localStorage.getItem('usuario');
const password = localStorage.getItem('password');
const user = false
    if(usuario === 'alamy' && password === 'luna28') {
        this.user = true
    }  
    return user ? children : <Navigate to="/home" />;
}