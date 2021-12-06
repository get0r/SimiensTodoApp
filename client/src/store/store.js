import { configureStore } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';

import userReducer from './slices/user.slice';

const rootReducerCreator = history => {
    return {
        router: connectRouter(history),
        user: userReducer,
    };
};

export const history = createBrowserHistory();

export const store = configureStore({
    reducer: rootReducerCreator(history),
    middleware: [routerMiddleware(history)],
    devTools: true,
});
