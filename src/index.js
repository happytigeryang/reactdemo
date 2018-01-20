import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {configureStore, history} from './store/configureStore';
import Root from './containers/_Root';

const store = configureStore();
console.log(process.env.NODE_ENV);
render(
    <AppContainer>
    <Root store={store} history={history}/>
</AppContainer>, document.getElementById('root'));

if (module.hot) {
    module
        .hot
        .accept('./containers/_Root', () => {
            const newConfigureStore = require('./store/configureStore');
            const newStore = newConfigureStore.configureStore();
            const newHistory = newConfigureStore.history;
            const NewRoot = require('./containers/_Root').default;
            render(
                <AppContainer>
                <NewRoot store={newStore} history={newHistory}/>
            </AppContainer>, document.getElementById('root'));
        });
}
