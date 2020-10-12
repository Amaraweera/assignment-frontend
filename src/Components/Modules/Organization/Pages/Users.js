import React from "react";
import { Table, Col, Button } from "react-bootstrap";

const Users = ({
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
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length !== 0 && data.map((user, key) => (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Col>
    );
}

export default Users;