import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Tickets from './Pages/Tickets';

const TicketsRoutes = () => {
    return (
        <Fragment>
            <Route path="/tickets" exact component={Tickets} />
        </Fragment>
    )
};

export default TicketsRoutes;

