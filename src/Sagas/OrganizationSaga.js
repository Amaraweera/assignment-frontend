import { put, call } from "redux-saga/effects";
import { fetchOrganization, fetchTickets, fetchUsers } from "../Services/Service";
// import { setToken } from "../utils/storage";

import * as types from "../Actions";

export function* OrganizationSaga(payload) {
  try {
    const response = yield call(fetchOrganization, payload);
    if (response.data) {
      yield put({ type: types.FETCH_ORGANIZATIONS_SUCCESS, response });
    } else {
      yield put({ type: types.FETCH_ORGANIZATIONS_FAILED, response });
    }
  } catch (error) {
    yield put({ type: types.FETCH_ORGANIZATIONS_FAILED, error });
  }
}

export function* TicketsSaga(payload) {
  try {
    const response = yield call(fetchTickets, payload);
    if (response.data) {
      yield put({ type: types.FETCH_TICKETS_SUCCESS, response });
    } else {
      yield put({ type: types.FETCH_TICKETS_FAILED, response });
    }
  } catch (error) {
    yield put({ type: types.FETCH_TICKETS_FAILED, error });
  }
}

export function* UsersSaga(payload) {
  try {
    const response = yield call(fetchUsers, payload);
    if (response.data) {
      yield put({ type: types.FETCH_USERS_SUCCESS, response });
    } else {
      yield put({ type: types.FETCH_USERS_FAILED, response });
    }
  } catch (error) {
    yield put({ type: types.FETCH_USERS_FAILED, error });
  }
}