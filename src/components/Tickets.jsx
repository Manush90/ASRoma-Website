import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Tickets() {
  return (
    <Card>
      <Card.Header as="h5">30 Giornata di Serie A</Card.Header>
      <Card.Body>
        <Card.Title>Roma - Fiorentina</Card.Title>
        <Card.Text>Stadio Olimpico di Roma 24/04/2024</Card.Text>
        <Button variant="primary">Acquista Biglietti</Button>
      </Card.Body>
    </Card>
  );
}

export default Tickets;
