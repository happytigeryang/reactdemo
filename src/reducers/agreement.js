import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import * as types from '../constants/actionTypes';

export default function agreement(state = {}, action) {
    switch (action.type) {
        case types.AGREEMENT_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.AGREEMENT_FETCH_SUCCESS:
            return {
                ...state,
                id: action.payload.result,
                isFetching: false,
                lastUpdated: action.payload.receivedAt,
                error: false
            }
        case types.AGREEMENT_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state;
    }
}