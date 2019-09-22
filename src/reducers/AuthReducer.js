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
} from '../actions/types'
 
const INITIAL_STATE = {
    email:'',
    password:'',
    user: null,
    error: '',
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return{ ...state, email:action.payload}
        
        case PASSWORD_CHANGED:
            return{ ...state, password:action.payload}
        
        case LOGIN_USER:
            return { ...state, loading:true, error:'',}

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                error:'', password:'',loading:false,email:'',
                user:action.payload,
            }
            
        case CREATE_USER:
            return{...state, loading:true, error:'',}
        
        case USER_CREATED:
                return{
                    ...state, loading:false, error:'',email:'',password:''
                }
        case CHANGE_PASSWORD:
            return{...state, loading:true, error:'',}
            
        case LOGIN_USER_FAIL:
            return {...state, error:'Authentication Failed', password:'',email:'',loading:false}
        
        case USER_LOGOUT: 
                return {...state, loading:false, error:'',email:'',password:''}
                
        default:
            return state;
    }
};