import {combineReducers} from 'redux';
import {SERVICES_UPDATE_ERROR, SERVICES_UPDATE_IN_PROGRESS, SERVICES_UPDATED} from "./servicesActions";

const servicesInitialState = {
    updating: false,
    error: null,
    items: []
};

function services(state = servicesInitialState, action) {
    switch (action.type) {
        case SERVICES_UPDATED : {
            return {...state, items: action.data, error: null, updating: false};
        }
        case SERVICES_UPDATE_ERROR : {
            return {...state, items: [], error: action.data, updating: false}
        }
        case SERVICES_UPDATE_IN_PROGRESS : {
            return {...state, updating: true}
        }
        default:
            return state;
    }
}


export default combineReducers({services});