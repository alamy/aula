import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo"></div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/usuario">Usuario</Link></li>
            <li><Link to="/contador">Contador</Link></li>
          </ul>
        </div>
      </nav>
    )
}
export default NavBar;

