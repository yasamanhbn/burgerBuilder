import * as actions from './actionTypes'
import axios from "axios";

export const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}

export const logOut= ()=>{
    return{
        type:actions.AUTH_LOGOUT
    }
}
export const checkoutTime=(expirationTime)=>{
    return dispatch => {
        setTimeout(()=> {
                dispatch(logOut())
            },expirationTime*1000
        )
    }
}
export const authSuccess = (token,userId) => {
    return {
        type: actions.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }
}

export const authFailed = (error) => {
    return {
        type: actions.AUTH_FAILED,
        error: error
    }
}

export const auth = (email, pass, isSignIn) => {

    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: pass,
            returnSecureToken: true
        }
        let url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCmo0xnHMQIxWPix2yPJ1Lp5AraiVFvWCE'
        if(isSignIn){
            url ='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCmo0xnHMQIxWPix2yPJ1Lp5AraiVFvWCE'
        }
        axios.post(url,authData)
            .then(response=> {
                dispatch(authSuccess(response.data.idToken,response.data.localId))
                dispatch(checkoutTime(response.data.expiresIn))
            })
            .catch(err => {
                dispatch(authFailed(err.response.data.error))
            })
    }
}