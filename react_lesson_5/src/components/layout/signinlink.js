import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signout } from "../../store/actions/authactions";

const SignIn = (props) => {
    const {profile} = props;
    return (
        <ul className = "right">
            <li><NavLink to = "/">Dashbourd</NavLink></li>
            <li><NavLink to = "/addproject">Add Project</NavLink></li>
            <li><NavLink to = "/signin" onClick = {props.signOut}>Log Out</NavLink></li>
            <li><NavLink to = "/" className = "btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signout())
    }
}

export default connect(null , mapDispatchToProps)(SignIn) ;