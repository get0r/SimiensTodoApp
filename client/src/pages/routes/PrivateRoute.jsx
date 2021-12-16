import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { Loader } from '../../components';
import { isAuthenticated } from '../../helpers/isAuthenticated';
import { SIGNIN } from './pathConstants';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/slices/user.slice';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(userSelector);

    const render = props => {
        const isAuth = isAuthenticated(user);
        if (isAuth === 0) return <Redirect to={ SIGNIN } />
        if (isAuth === 1) return <Component { ...props } />

        return <Loader />
    };

    return <Route { ...rest } render={ render } />
};

export default PrivateRoute;
