import React from "react";
import moment from "moment";

const Notification = (props) => {
    let {projects} = props;
    projects = projects.slice(0,15);
    return(
        <div className = "section">
            <div className = "card z-depth-0">
                <div className = "card-content grey darken-3 white-text text-darken-3">
                    <span className = "card-title center"><b><b>Notifications</b></b></span>
                    <ul className = "notification card-body">
                        {projects && projects.map(project => {
                                return(
                                <li key = {project.autherId}><p>{project.autherFirstName} added new project {moment(project.createdAt.toDate()).fromNow()}</p></li>
                                )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification;