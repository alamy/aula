import './NavBar.css';
import {Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
          <div class="nav-wrapper">
            <div class="brand-logo"></div>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/usuario">Usuario</Link></li>
          </ul>
        </div>
      </nav>
    )
}
export default NavBar;