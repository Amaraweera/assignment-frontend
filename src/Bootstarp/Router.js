import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import OrganizationRoutes from '../Components/Modules/Organization/Organization.route';
import TicketsRoutes from '../Components/Modules/Tickets/Tickets.route';
import UsersRoutes from '../Components/Modules/Users/Users.route';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <OrganizationRoutes />
                    <TicketsRoutes />
                    <UsersRoutes />
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;