import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

//load devtools for not production
const DevTools = (process.env.NODE_ENV === 'prd')
    ? null
    : require('../containers/_DevTools');

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware),
            DevTools&&DevTools.instrument()
        )
    );
}
