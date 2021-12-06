import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout, NavBar } from '../layouts';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

const Routes = () => {
    return (
        <Layout header={ NavBar }>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SignInPage />
                    </Route>
                    <Route path="/signUp">
                        <SignUpPage />
                    </Route>
                </Switch>
            </Router>
        </Layout>
    );
};

export default Routes
