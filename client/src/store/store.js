import { configureStore } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';

import userReducer from './slices/user.slice';
import authReducer from './slices/auth.slice';
import categoriesReducer from './slices/category.slice';

const rootReducerCreator = history => {
    return {
        router: connectRouter(history),
        user: userReducer,
        auth: authReducer,
        categories: categoriesReducer,
    };
};

export const history = createBrowserHistory();

export const store = configureStore({
    reducer: rootReducerCreator(history),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
    devTools: true,
});
