import React, { useState, useEffect } from 'react';
import Layout from "../../../Layout/Layout";
import { Form, Col, Row, Table, Button, Pagination } from "react-bootstrap";
import { connect } from "react-redux";

import userSvg from "../../../../Resources/Icons/users.svg";
import ticketsSvg from "../../../../Resources/Icons/tickets.svg";
import { fetchOrganizationAction } from "../../../../Actions/OrganizationAction";
import UsersComponent from "./Users";
import TicketsComponent from "./Tickets";

const Organization = (props) => {
    const [searchString, setSearchString] = useState("");
    const [page, setPage] = useState(1);
    const [showUsers, setShowUsers] = useState(false);
    const [userList, setUserList] = useState([]);
    const [showTickets, setShowTickets] = useState(false);
    const [ticketList, setTicketList] = useState([]);

    useEffect(() => {
        props.fetchOrganizationAction({ search: searchString, page: page });
    }, []);

    useEffect(() => {
        if (props.Organizations.data) {
            props.fetchOrganizationAction({ search: searchString, page: page })
        }
    }, [page]);

    useEffect(() => {
        if (props.Organizations.data) {
            props.fetchOrganizationAction({ search: searchString, page: page })
        }
    }, [searchString]);

    const Pagination = (action) => {

        if (action === 'next' && page + 1 <= props.Organizations.meta.last_page) {
            setPage(page + 1);
        }
        else if (action === 'previuos' && page - 1 >= 1) {
            setPage(page - 1);
        }
    }

    const closeComponent = () => {
        setShowUsers(false);
        setShowTickets(false);
    }

    return (
        <>
            <Layout>
                {/* <h1>Organizations</h1> */}
                {!showUsers && !showTickets && (
                    <>
                        <Col xs={9} className="mt-10">
                            <h3>Organizations <small className="float-right">Search Organizations</small></h3>
                        </Col>
                        <Col xs={3} className="mt-10">
                            <Form>
                                <Form.Group>
                                    <Form.Control value={searchString} onChange={(e) => { setPage(1); setSearchString(e.target.value); }} type="text" placeholder="Search" />
                                </Form.Group>
                            </Form>
                        </Col>

                        <Col >
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Details</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.Organizations.length !== 0 && props.Organizations.data.map((org, key) => (
                                            <tr>
                                                <td>{org.id}</td>
                                                <td>{org.name}</td>
                                                <td>{org.details}</td>
                                                <td>
                                                    <img onClick={() => { setShowUsers(true); setUserList(org.users); }} className="img-height" src={userSvg} />
                                                    <img onClick={() => { setShowTickets(true); setTicketList(org.tickets); }} className="img-height ml-5" src={ticketsSvg} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                            <Button onClick={() => Pagination('previuos')}>Previous</Button>  <Button onClick={() => Pagination('next')}>Next</Button>
                        </Col>
                    </>)}

                {showUsers && (
                    <UsersComponent
                        data={userList}
                        closeComponent={closeComponent}
                    />
                )}

                {showTickets && (
                    <TicketsComponent
                        data={ticketList}
                        closeComponent={closeComponent}
                    />
                )}
            </Layout>
        </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrganizationAction: (data) => dispatch(fetchOrganizationAction(data))
    };
};

const mapStateToProps = (response) => ({
    Organizations: response.OrganizationReducer.organizations
});
export default connect(mapStateToProps, mapDispatchToProps)(Organization);