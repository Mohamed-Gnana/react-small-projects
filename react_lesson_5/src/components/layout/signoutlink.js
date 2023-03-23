import React from "react";
import { NavLink } from "react-router-dom";

const SignOut = () => {
    return (
        <ul className = "right">
            <li><NavLink to = "/signup">Sign Up</NavLink></li>
            <li><NavLink to = "/signin">Log In</NavLink></li>
        </ul>
    )
}


export default SignOut ;