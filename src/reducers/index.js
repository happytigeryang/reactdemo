import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import * as types from '../constants/actionTypes';

import agreement from './agreement';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const rootReducer = combineReducers({filter, agreement, routing});

export default rootReducer;