import {
    REGISTRATION
} from '../actions/types';

const INITIAL_STATE = {
    isUserRegistered: false
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRATION: {
            return {
                ...state,
                isUserRegistered: action.payload
            };
        }
        default:
            return state;
    }
};

