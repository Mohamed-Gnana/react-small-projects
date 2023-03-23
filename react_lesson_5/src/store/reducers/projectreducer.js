const initState = {
    projects : []
}

const ProjectReducer = (state = initState , action) => {
    if (action.type === "Create_Project") { 
        return {
            ...state,
            projects : [...state.projects , action.project]
        }
    }
    else if (action.type === "Create_Project_Error") {
        console.log(action.err);
        return state;
    }
    return state ;
}

export default ProjectReducer ;