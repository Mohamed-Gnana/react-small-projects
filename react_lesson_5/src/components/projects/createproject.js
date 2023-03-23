import React from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import AddProject from "../../store/actions/projectactions";

class CreateProject extends React.Component {
    state = {
        title : '',
        content : '',
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    submitme = (e) => {
        e.preventDefault() ; 
        console.log(this.props);
        this.props.addProject(this.state);
        this.setState({
            title : '',
            content : ''
        });
        this.props.history.push("/");
    }
    render(){
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to = "/signin"/>
        return (
            <div className = "container">
                <form className = "white" onSubmit = {this.submitme} >
                    <h5 className = "grey-text text-darken-3">Add Project</h5>
                    <div className = "input-field">
                        <label htmlFor = "title">Project Title</label>
                        <input type = "text" id = "title" onChange = {this.changeme} value = {this.state.title}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "content">Project Content</label>
                        <textarea  id = "content" className = "materialize-textarea" onChange = {this.changeme}value = {this.state.content}></textarea>
                    </div>
                    <div className = "input-field">
                        <button className = "btn pink lighten-2">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProject : (project) => dispatch(AddProject(project)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject) ;
