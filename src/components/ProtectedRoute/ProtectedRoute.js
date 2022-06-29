import { Redirect, Route } from "react-router-dom";

import React from "react";

const ProtectedRoute = ({ children, loggedIn }) => {

    return (
        loggedIn ? children : <Redirect to="/" />
    )
};

export default ProtectedRoute;