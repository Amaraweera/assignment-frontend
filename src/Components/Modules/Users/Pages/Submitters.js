import React from "react";
import { Table, Col, Button } from "react-bootstrap";

const Submitters = ({
    data = [],
    closeComponent = () => { }
}) => {
    return (
        <Col >
            <Col className="mt-10">
                <Button onClick={closeComponent}>Back</Button>
            </Col>

            <Table className="mt-10" striped bordered hover>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Subject</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length !== 0 && data.map((ticket, key) => (
                            <tr>
                                <td>{ticket.type}</td>
                                <td>{ticket.subject}</td>
                                <td>{ticket.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Col>
    );
}

export default Submitters;