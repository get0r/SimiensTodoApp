import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { Loader, Toast } from '../../components';
import { isAuthenticated } from '../../helpers/isAuthenticated';
import { SIGNIN } from './pathConstants';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/slices/user.slice';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(userSelector);

    const render = props => {
        const isAuth = isAuthenticated(user);
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
