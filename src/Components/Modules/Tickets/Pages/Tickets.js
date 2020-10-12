import React, { useState, useEffect } from 'react';
import Layout from "../../../Layout/Layout";
import { Form, Col, Row, Table, Button, Pagination } from "react-bootstrap";
import { connect } from "react-redux";

import userSvg from "../../../../Resources/Icons/users.svg";
import ticketsSvg from "../../../../Resources/Icons/tickets.svg";
import { fetchTicketsAction } from "../../../../Actions/OrganizationAction";

const Ticket = (props) => {
    const [searchString, setSearchString] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        props.fetchTicketsAction({ search: searchString, page: page });
    }, []);

    useEffect(() => {
        if (props.Tickets.data) {
            props.fetchTicketsAction({ search: searchString, page: page })
        }
    }, [page]);

    useEffect(() => {
        if (props.Tickets.data) {
            props.fetchTicketsAction({ search: searchString, page: page })
        }
    }, [searchString]);

    const Pagination = (action) => {

        if (action === 'next' && page + 1 <= props.Tickets.meta.last_page) {
            setPage(page + 1);
        }
        else if (action === 'previuos' && page - 1 >= 1) {
            setPage(page - 1);
        }
    }

    return (
        <Layout>
            {/* <h1>Organizations</h1> */}
            <Col xs={9} className="mt-10">
                <h3>Tickets <small className="float-right">Search Tickets</small></h3>
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
                            <th>Type</th>
                            <th>subject</th>
                            <th>Description</th>
                            <th>Submitter</th>
                            <th>Assinee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.Tickets.length !== 0 && props.Tickets.data.map((ticket, key) => (
                                <tr>
                                    <td>{ticket.type}</td>
                                    <td>{ticket.subject}</td>
                                    <td>{ticket.description}</td>
                                    <td>{ticket.submitter.name ? ticket.submitter.name : "-"}</td>
                                    <td>{ticket.assignee.name ? ticket.assignee.name : "-"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Button onClick={() => Pagination('previuos')}>Previous</Button>  <Button onClick={() => Pagination('next')}>Next</Button>
            </Col>
        </Layout>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTicketsAction: (data) => dispatch(fetchTicketsAction(data))
    };
};

const mapStateToProps = (response) => ({
    Tickets: response.OrganizationReducer.tickets
});
export default connect(mapStateToProps, mapDispatchToProps)(Ticket);