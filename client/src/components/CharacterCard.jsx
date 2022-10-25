import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CharacterCard(props) {
  return (
    <Card style={{ width: '18rem' }} key = "{props.name}">
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <br />
        <Card.Text>
          <b>Devil Fruit:</b> {props.devilFruit}
        </Card.Text>
        <Card.Text>
          <b>Bounty:</b> {props.bounty}
        </Card.Text>
        <Card.Text>
          <b>Crew:</b> {props.pirateCrew}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;