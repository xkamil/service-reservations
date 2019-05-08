import {combineReducers} from 'redux';
import {SERVICES_UPDATE_ERROR, SERVICES_UPDATE_IN_PROGRESS, SERVICES_UPDATED} from "./servicesActions";

const configInitialState = {
    updating: false,
    error: null,
    services: []
};

function config(state = configInitialState, action) {
    switch (action.type) {
        case SERVICES_UPDATED : {
            return {...state, services: action.data, updating: false};
        }
        case SERVICES_UPDATE_ERROR : {
            return {...state, services: [], error: action.error, updating: false}
        }
        case SERVICES_UPDATE_IN_PROGRESS : {
            return {...state, updating: true}
        }
        default:
            return state;
    }
}


export default combineReducers({config});