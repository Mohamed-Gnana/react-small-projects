import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {signin} from "../../store/actions/authactions";


class SigningIn extends React.Component {
    state = {
        email : '',
        password : ''
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    submitme = (e) => {
        e.preventDefault() ; 
        this.props.signIn(this.state);
    }
    render(){
        const {authError , auth} = this.props;
        if(auth.uid) return <Redirect to = "/" />
        return (
            <div className = "container">
                <form className = "white" onSubmit = {this.submitme} >
                    <h5 className = "dark-text text-darken-3">Log In</h5>
                    <div className = "input-field">
                        <label htmlFor = "email">Email</label>
                        <input type = "email" id = "email" onChange = {this.changeme} />
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "password">Password</label>
                        <input type = "password" id = "password" onChange = {this.changeme} />
                    </div>
                    <div className = "input-field">
                        <button className = "btn pink lighten-2">Submit</button>
                        <div className = 'red-text text-darken-2 center'>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError : state.auth.authError,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn : (confid) => dispatch(signin(confid))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(SigningIn) ;
