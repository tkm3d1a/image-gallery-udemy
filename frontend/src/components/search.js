import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-2">
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form.Control placeholder="Search for..." />
          </Col>
          <Button variant="primary">Primary</Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;
