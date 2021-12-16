import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Layout, NavBar } from '../layouts';
import { history } from '../store/store';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import NotFoundPage from './NotFoundPage';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store/slices/user.slice';


const Routes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser())
    }, []);

    return (
        <Layout header={ NavBar }>
            <ConnectedRouter history={ history }>
                <Switch>
                    <PublicRoute restricted path="/signIn" component={ SignInPage } />
                    <PublicRoute restricted path="/signUp" component={ SignUpPage } />
                    <PublicRoute component={ NotFoundPage } />
                </Switch>
            </ConnectedRouter>
        </Layout>
    );
};

export default Routes
