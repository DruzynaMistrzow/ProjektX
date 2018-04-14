import {
    REGISTRATION,
    LOGIN,
    LOGOUT,
    ADD_METERS
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    distance: 0
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
                username: 'test',
                distance: 100
            };
        }
        case LOGOUT: {
            return {
                ...state,
                username: '',
                distance: 0
            };
        }
        case ADD_METERS: {
            return {
                ...state,
                distance: state.distance + action.payload
            };
        }
        default:
            return state;
    }
};

