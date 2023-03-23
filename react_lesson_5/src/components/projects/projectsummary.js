import React from "react";
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <div className = "card z-depth-0 project-summary">
                <div className = "card-content grey darken-3 white-text text-darken-3">
                    <span className = "card-title"><b><b>{project.title}</b></b></span>
                    <p>posted my : {project.autherFirstName + " " + project.autherLastName}</p>
                    <p className = "grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}

export default ProjectSummary ;