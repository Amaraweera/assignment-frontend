import { takeLatest } from 'redux-saga/effects';
import { OrganizationSaga, TicketsSaga, UsersSaga } from './OrganizationSaga';

import * as types from '../Actions';


export default function* watchUserAuthentication() {
    yield takeLatest(types.FETCH_ORGANIZATIONS, OrganizationSaga);
    yield takeLatest(types.FETCH_TICKETS, TicketsSaga);
    yield takeLatest(types.FETCH_USERS, UsersSaga);
}