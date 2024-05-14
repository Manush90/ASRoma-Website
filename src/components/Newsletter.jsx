import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

function mail() {
  return (
    <Container fluid className="mt-3 ps-4 pe-4 text-center ">
      <Row className="justify-content-center">
        <Col sm={9} md={9} lg={9}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-center"> Iscriviti alla nostra Newsletter !</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci qui il tuo indirizzo e-mail"
                className="text-center"
              />
              <h6 className=" mt-2 customcolor">Non condivideremo in nessun modo i tuoi dati</h6>
            </Form.Group>

            <Button className="buttonColor" type="submit">
              Iscriviti
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default mail;
