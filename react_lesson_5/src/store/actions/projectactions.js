const AddProject = (project) => {
    return (dispatch , getState , {getFirebase}) => {
        // async code with database 
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const autherId = getState().firebase.auth.uid;
        firestore.collection("projects").add({
            ...project,
            autherFirstName : profile.firstName,
            autherLastName : profile.lastName,
            autherId : autherId , 
            createdAt : new Date()
        }).then(() => {
            dispatch({type : "Create_Project" , project : project});
        }).catch((err) => {
            dispatch({type : "Create_Project_Error", err})
        })
    }
}
export default AddProject ;