import { Container, Row, Spinner } from "react-bootstrap";

function Loader() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Spinner animation="border" role="status" variant="primary"></Spinner>
      </Row>
    </Container>
  );
}

export default Loader;
