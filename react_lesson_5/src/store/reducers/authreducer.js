const initState = {
    authError : null
}

const AuthReducer = (state = initState , action) => {
    switch (action.type) {
        case "Login_Suc":
            return {
                ...state,
                authError : null
            };
        case "Login_Error" :
            return {
                ...state,
                authError : "LogIn Failed"
            };
        case "Signout_Success":
            console.log("signout success");
            return state;
        case "Signup_Success":
            return {
                ...state,
                authError : null
            };
        case "Signup_Error" :
            return{
                ...state,
                authError : action.err.message
            } 
        default :
            return state ;
            
    }
}

export default AuthReducer ;