import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Organization from './Pages/Organization';

const OrganizationRoutes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={Organization} />
        </Fragment>
    )
};

export default OrganizationRoutes;

