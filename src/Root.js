import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

/* 
    The functional component used to allow any component needs to access redux store
    deconstructure the props so that we can set the default value to initialState,
    otherwise, there's compilation issue if we don't pass initialState as props in Root component
*/
export default ({ children, initialState = {} }) => {

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}