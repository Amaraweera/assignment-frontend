import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Users from './Pages/Users';

const UsersRoutes = () => {
    return (
        <Fragment>
            <Route path="/users" exact component={Users} />
        </Fragment>
    )
};

export default UsersRoutes;

