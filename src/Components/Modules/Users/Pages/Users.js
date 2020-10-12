import React, { useState, useEffect } from 'react';
import Layout from "../../../Layout/Layout";
import { Form, Col, Row, Table, Button, Pagination } from "react-bootstrap";
import { connect } from "react-redux";

import userSvg from "../../../../Resources/Icons/users.svg";
import ticketsSvg from "../../../../Resources/Icons/tickets.svg";
import { fetchUserAction } from "../../../../Actions/OrganizationAction";
import AssineeComponent from "./Assignees";
import SubmitterComponent from "./Submitters";

const Users = (props) => {
    const [searchString, setSearchString] = useState("");
    const [page, setPage] = useState(1);
    const [showAssignTickets, setShowAssignTickets] = useState(false);
    const [assignTickets, setAssignTickets] = useState([]);
    const [showSubmitTickets, setShowSubmitTickets] = useState(false);
    const [submittedTickets, setSubmittedTickets] = useState([]);

    useEffect(() => {
        props.fetchUserAction({ search: searchString, page: page });
    }, []);

    useEffect(() => {
        if (props.Users.data) {
            props.fetchUserAction({ search: searchString, page: page })
        }
    }, [page]);

    useEffect(() => {
        if (props.Users.data) {
            props.fetchUserAction({ search: searchString, page: page })
        }
    }, [searchString]);

    const Pagination = (action) => {

        if (action === 'next' && page + 1 <= props.Users.meta.last_page) {
            setPage(page + 1);
        }
        else if (action === 'previuos' && page - 1 >= 1) {
            setPage(page - 1);
        }
    }

    const closeComponent = () => {
        setShowAssignTickets(false);
        setShowSubmitTickets(false);
    }

    return (
        <>
            <Layout>
                {/* <h1>Organizations</h1> */}
                {!showAssignTickets && !showSubmitTickets && (
                    <>
                        <Col xs={9} className="mt-10">
                            <h3>Users <small className="float-right">Search Users</small></h3>
                        </Col>
                        <Col xs={3} className="mt-10">
                            <Form>
                                <Form.Group>
                                    <Form.Control onChange={(e) => { setPage(1); setSearchString(e.target.value); }} type="text" placeholder="Search" />
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
                                        props.Users.length !== 0 && props.Users.data.map((user, key) => (
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <img onClick={() => { setShowAssignTickets(true); setAssignTickets(user.assign_tickets); }} className="img-height" src={userSvg} />
                                                    <img onClick={() => { setShowSubmitTickets(true); setSubmittedTickets(user.submitted_tickets); }} className="img-height ml-5" src={ticketsSvg} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                            <Button onClick={() => Pagination('previuos')}>Previous</Button>  <Button onClick={() => Pagination('next')}>Next</Button>
                        </Col>
                    </>)}

                {showAssignTickets && (
                    <AssineeComponent
                        data={assignTickets}
                        closeComponent={closeComponent}
                    />
                )}

                {showSubmitTickets && (
                    <SubmitterComponent
                        data={submittedTickets}
                        closeComponent={closeComponent}
                    />
                )}
            </Layout>
        </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserAction: (data) => dispatch(fetchUserAction(data))
    };
};

const mapStateToProps = (response) => ({
    Users: response.OrganizationReducer.users
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);