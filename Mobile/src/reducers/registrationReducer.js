import {
    REGISTRATION,
    LOGIN,
    LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
    isUserLoggedIn: false
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRATION: {
            return {
                ...state,
                isUserLoggedIn: action.payload
            };
        }
        case LOGIN: {
            return {
                ...state,
                isUserLoggedIn: true
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isUserLoggedIn: false
            };
        }
        default:
            return state;
    }
};

