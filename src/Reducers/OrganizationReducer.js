import * as types from '../Actions';

const initailState = {
    organizations: [],
    tickets: [],
    users: []
};

export default function (state = initailState, action) {
    let response = action.response;
    switch (action.type) {
        case types.FETCH_ORGANIZATIONS_SUCCESS:
            return { ...state, organizations: response.data };
        case types.FETCH_ORGANIZATIONS_FAILED:
            return { ...state, organizations: response.data };
        case types.FETCH_TICKETS_SUCCESS:
            return { ...state, tickets: response.data };
        case types.FETCH_TICKETS_FAILED:
            return { ...state, tickets: response.data };
        case types.FETCH_USERS_SUCCESS:
            return { ...state, users: response.data };
        case types.FETCH_USERS_FAILED:
            return { ...state, users: response.data };
        default:
            return state;
    }
}