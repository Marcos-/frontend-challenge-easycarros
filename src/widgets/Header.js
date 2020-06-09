import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="nav-extended blue">
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Veículos</Link>
            <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="Login">Login</Link></li>
            </ul>
            </div>
        </nav>
    );
}

export default Header;