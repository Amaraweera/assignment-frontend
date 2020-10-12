import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = (props) => {
  return (
    <Container fluid>
      <Col>
        <Row>
          <Topbar />
        </Row>
        <Row>
          {props.children}
        </Row>
      </Col>
    </Container>
  );
};

export default Layout;
