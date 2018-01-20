import * as types from '../constants/actionTypes';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
