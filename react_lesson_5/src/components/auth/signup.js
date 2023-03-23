import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signedup } from "../../store/actions/authactions";

class SigningUp extends React.Component {
    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : ''
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    submitme = (e) => {
        e.preventDefault() ; 
        this.props.signup(this.state);
    }
    render(){
        const {auth , authError} = this.props ; 
        if (auth.uid) return <Redirect to = "/" />
        return (
            <div className = "container">
                <form className = "white" onSubmit = {this.submitme} >
                    <h5 className = "dark-text text-darken-3">Sign Up</h5>
                    <div className = "input-field">
                        <label htmlFor = "firstName">First Name</label>
                        <input type = "text" id = "firstName" onChange = {this.changeme} />
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "lastName">Last Name</label>
                        <input type = "text" id = "lastName" onChange = {this.changeme} />
                    </div>
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
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup : (newuser) => dispatch(signedup(newuser)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SigningUp);
