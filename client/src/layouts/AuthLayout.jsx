import React from "react";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import {LOGIN_ROUTE, SIGNUP_ROUTE} from "../utils/consts";

const AuthLayout = () => {
    let { path } = useRouteMatch();
    // const isLoggedIn = true;
    //
    // if (isLoggedIn) {
    //     return <Redirect to='/' />;
    // }

    return (
        <div>
            <Switch>
                <Route path={path + LOGIN_ROUTE} component={LoginPage} />
                <Route path={path + SIGNUP_ROUTE} component={SignupPage} />
                <Redirect to={path + SIGNUP_ROUTE} />
            </Switch>
        </div>
    );
};

export default AuthLayout;
