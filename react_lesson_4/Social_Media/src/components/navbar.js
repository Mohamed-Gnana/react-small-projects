import React from 'react';
import { Link , NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className = "nav-wrapper red darken-4">
            <div className = 'container'>
                <Link to = "/" className ="brand-logo">Gnana</Link>
                <ul className ="right">
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink to = "/About">About</NavLink></li>
                    <li><NavLink to = "/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar ;