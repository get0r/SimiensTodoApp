import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Loader, Toast } from '../../components';
import { isAuthenticated } from '../../helpers/isAuthenticated';
import { SIGNIN } from './pathConstants';
import { authSelector } from '../../store/slices/auth.slice';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { token } = useSelector(authSelector);

    const render = props => {
        const isAuth = isAuthenticated(token);
        switch (isAuth) {
            case 0:
                return <Redirect to={ SIGNIN } />
            case 1:
                return <Component { ...props } />
            case 2:
                return <Loader />
        }
        Toast('Error', 'Connection problem. reload the page and try again please.');
        return <Loader />
    };

    return <Route { ...rest } render={ render } />
};

export default PrivateRoute;
