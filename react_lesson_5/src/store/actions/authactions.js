
export const signin = (credintails) => {
    return (dispatch , getState , {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credintails.email,
            credintails.password
        ).then(() => {
            dispatch({type : "Login_Suc" , })
        }).catch((err) => {
            dispatch({type : "Login_Error" , err})
        });
    }
}


export const signout = () => {
    return (dispatch , getState , {getFirebase}) => {
        const firebase = getFirebase() ; 
        firebase.auth().signOut().then(() => {
            dispatch({type : "Signout_Success"})
        });
    }
}

export const signedup = (userInfo) => {
    return(dispatch , getState , {getFirebase}) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();

        firebase.auth().createUserWithEmailAndPassword(
            userInfo.email,
            userInfo.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName : userInfo.firstName,
                lastName : userInfo.lastName,
                initials : userInfo.firstName[0] + userInfo.lastName[0]
            })
        }).then(() => {
            dispatch({type : "Signup_Success"})
        }).catch((err) => {
            dispatch({type : "Signup_Error" , err})
        })

    }
}