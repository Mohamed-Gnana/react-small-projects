import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./signinlink";
import SignOut from "./signoutlink";
import { connect } from "react-redux";

const Navbar = (props) => {
    const {auth , profile} = props;
    const links = auth.uid ? <SignIn profile = {profile}/> : <SignOut /> ;
    return (
        <nav className = "nav-wrapper grey darken-3">
            <div className = "container nav-bar navi">
                <Link to = "/" className = "brand-logo">GnanaPlan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}


export default connect(mapStateToProps)(Navbar) ;