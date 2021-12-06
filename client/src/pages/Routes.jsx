import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Layout, NavBar } from '../layouts';
import { history } from '../store/store';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';


const Routes = () => {
    return (
        <Layout header={ NavBar }>
            <ConnectedRouter history={ history }>
                <Switch>
                    <Route exact path="/">
                        <SignInPage />
                    </Route>
                    <Route path="/signUp">
                        <SignUpPage />
                    </Route>
                </Switch>
            </ConnectedRouter>
        </Layout>
    );
};

export default Routes
