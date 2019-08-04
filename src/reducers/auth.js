import { AUTH_USER, AUTH_ERROR, AUTH_PASSWORD } from '../actions/types.js';

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: '',
    passwordMessage: ''
}

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case AUTH_USER:
            return { ...state, authenticated: action.payload };
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload };
            case AUTH_PASSWORD:
                return { ...state, passwordMessage: action.payload };
        default:
            return state;
    }
   
}