import React from "react";
import { Row, Col, Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Topbar() {
  return (
    <Col>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Assignment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Organization</Nav.Link>
            <Nav.Link href="/tickets">Tickets</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
}

export default Topbar;
