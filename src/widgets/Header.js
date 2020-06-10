import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import M from  'materialize-css/dist/js/materialize.min.js';

const Header = () => {
    return (
        <Fragment>
            <nav className="nav-extended blue">
                <div className="nav-wrapper">
                    <div className="brand-logo">Veículos</div>
                    <a href="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/vehicles">Veículos</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li><Link to="/vehicles">Veículos</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </Fragment>
    );
}

export default Header;