import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    CREATE_USER,
    USER_CREATED,
    CHANGE_PASSWORD,
    USER_LOGOUT
} from './types';
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';


export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text,
    }
};

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text,
    }
};

export const loginUser =({email,password}) => {
    return(dispatch) => {
        dispatch({type:LOGIN_USER});
        
        firebase.auth().signInWithEmailAndPassword(email,password) //Success
        .then(user => loginUserSuccess(dispatch,user))
        .catch((error) => {
            console.log(error);
            loginUserFail(dispatch);
        });
    };
}; 

export const createUser = ({email,password})=>{
    return(dispatch)=>{
        dispatch({type:CREATE_USER});

        firebase.auth().createUserWithEmailAndPassword(email,password)  //Create User
        .then(()=>createUserSuccess(dispatch))
        .catch((error) => {
            console.log(error);
            loginUserFail(dispatch);
        });
    }
}

export const changePassword = ({email})=>{
    return(dispatch)=>{
        dispatch({type: CHANGE_PASSWORD});

        firebase.auth().sendPasswordResetEmail(email)  //Create User
        .then(()=>resetPassword(dispatch))
        .catch((error) => {
            console.log(error);
            loginUserFail(dispatch);
        });
    }
}

export const userLogout = () => {
    return(dispatch)=>{
        dispatch({type: USER_LOGOUT});
        firebase.auth().signOut()
        .then(() => logout())
        .catch((error) => {
            console.log(error);
        });
    }
}

const loginUserSuccess = (dispatch,user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
    });
    Actions.main();
}


const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL,
    });
}

const createUserSuccess = (dispatch)=>{
    
    Alert.alert('Success','Sign Up Successful');
    Actions.pop();
    dispatch({
        type:USER_CREATED
    });
}

const resetPassword = (dispatch) => {
    Actions.pop();
    Alert.alert('Reset','Reset email sent Successfully.Check your e-mail');
    dispatch({
        type:USER_CREATED
    });
}

const logout = () => {
    Actions.pop();
    Alert.alert('Success','User Logged Out');
}