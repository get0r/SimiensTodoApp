import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { Loader } from '../../components';
import { isAuthenticated } from '../../helpers/isAuthenticated';
import { SIGNIN, HOME, ME } from './pathConstants';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/slices/user.slice';

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
    const { user } = useSelector(userSelector);

    const render = props => {
        const isAuth = isAuthenticated(user);
        if (isAuth === 2) return <Loader />
        if (isAuth === 1 && restricted) return <Redirect to={ ME } />

        return <Component { ...props } />
    };

    return <Route { ...rest } render={ render } />
};

export default PublicRoute;
