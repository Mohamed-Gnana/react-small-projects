import React from "react";
import Notification from "./notification";
import ProjectList from "../projects/projectlist";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dash extends React.Component {
    render() {
        const auth = this.props.auth ; 
        if (!auth.uid) return <Redirect to = "/signin" />
        const projects = this.props.projects ? this.props.projects : null ;
        if (projects !== null){
            return(
                <div className = "dash-bourd container">
                        <div className = "row">
                        <div className = "col s12 m8">
                            <ProjectList projects = {projects}/>
                        </div>
                        <div className = "col s12 m4">
                            <Notification projects = {projects}/>
                        </div>
                    </div>
                </div>
            )
        }else {
            return(
                <div className = "container center">Loading Projects</div>
            )
        }
    }
}


const mapStateToProps = (state) => {
    return {
        projects : state.firestore.ordered.projects,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: "projects" , orderBy : ['createdAt' , 'desc']}])
    )(Dash);