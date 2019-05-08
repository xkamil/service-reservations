import ApiClient from "../ApiClient";
import Store from "./Store";

export const SERVICES_UPDATED = 'SERVICES_UPDATED';
export const SERVICES_UPDATE_ERROR = 'SERVICES_UPDATE_ERROR';
export const SERVICES_UPDATE_IN_PROGRESS = 'SERVICES_UPDATE_IN_PROGRESS';

function updateServices() {
    Store.dispatch(SERVICES_UPDATE_IN_PROGRESS);
    ApiClient.getServices()
        .then(config => Store.dispatch(SERVICES_UPDATED, config, null))
        .catch(error => Store.dispatch(SERVICES_UPDATE_ERROR, null, error))
}

export {
    updateServices
}
