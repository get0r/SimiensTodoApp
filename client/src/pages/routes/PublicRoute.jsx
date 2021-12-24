import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

import { Loader, Toast } from '../../components';
import { isAuthenticated } from '../../helpers/isAuthenticated';
import { ME } from './pathConstants';
import { authSelector } from '../../store/slices/auth.slice';

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
    const { token } = useSelector(authSelector);

    const render = props => {
        const isAuth = isAuthenticated(token);
        switch (isAuth) {
            case 0:
                return <Component { ...props } />
            case 1:
                if (restricted) return <Redirect to={ ME } />
                return <Component { ...props } />
            case 2:
                return <Loader />
        }
        Toast('Error', 'Connection problem. reload the page and try again please.');
        return <Loader />
    };

    return <Route { ...rest } render={ render } />
};

export default PublicRoute;
