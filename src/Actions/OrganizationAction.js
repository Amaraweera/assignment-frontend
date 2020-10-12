import * as types from './index';

export const fetchOrganizationAction = (payload) => {
    return {
        type: types.FETCH_ORGANIZATIONS,
        payload
    }
};

export const fetchTicketsAction = (payload) => {
    return {
        type: types.FETCH_TICKETS,
        payload
    }
};

export const fetchUserAction = (payload) => {
    return {
        type: types.FETCH_USERS,
        payload
    }
}