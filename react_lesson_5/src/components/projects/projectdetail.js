import React from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from 'react-router-dom';
import { compose } from "redux";
import moment from "moment";

function ProjectDetail(props) {
    const {auth} = props;
    if (!auth.uid) return <Redirect to = "/signin" />
    const project = props.project ? props.project[0] : null ; 
    
    if (project!==null){
        const projectTitle = project.title ;
        const projectContent = project.content;
        const projectAutherName =(project.autherFirstName + " " + project.autherLastName);
        const projectDate = moment(project.createdAt.toDate()).calendar();
        return (
            <div className = "project-detail container section">
                <div className = "card z-depth-0 project-summary">
                    <div className = "card-content grey darken-3 white-text text-darken-3">
                        <span className = "card-title"><b><b>{projectTitle}</b></b></span>
                        <p className = "card-body"> {projectContent} </p>
                    </div>
                    <div className = "card-action gret lighten-4 grey-text">
                        <p>posted by : <b><b>{projectAutherName}</b></b></p>
                        <p>{projectDate}</p>
                    </div>
                </div>
            </div>
        )
}else {
    return (
        <div className = "container center">
            <p>Loading Project .......</p>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    const project = state.firestore.ordered.project ? state.firestore.ordered.project : null ;
    return {
        project : project,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {return [
        {collection : 'projects' , doc : props.match.params.project_id , storeAs : 'project'}
    ]})
)(ProjectDetail);

