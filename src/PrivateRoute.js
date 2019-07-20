import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...otherProps}) => {
    return localStorage.getItem('user') ? (
        <Route
            {...otherProps}
            render={props => (
                <Component {...props}/>
            )}
        />
    ) : (
        <Redirect 
            to="/login"
        />
    )
}

export default PrivateRoute;