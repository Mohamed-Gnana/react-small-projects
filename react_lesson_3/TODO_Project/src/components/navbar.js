import React from "react";
import { Link , NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className = "nav-wrapper blue darken-3">
            <div className = "container" >
                <Link to = '/' className = "brand-logo">Todo's</Link>
                <ul className = "right">
                    <li><NavLink to = "/">Todos</NavLink></li>
                    <li><NavLink to = "/addtodo">Addtodo</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar ;