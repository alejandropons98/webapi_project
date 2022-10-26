import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddCharacterForm() {
  return (
    <Form>
        <Row>
            <Col className='m-2'>
      <Form.Group className="mb-3" controlId="formName">
        {/* <Form.Label>Name</Form.Label> */}
        <Form.Control type="input" placeholder="Name" />
      </Form.Group>
        </Col>
        <Col className='m-2'>
      <Form.Group className="mb-3" controlId="formBounty">
        {/* <Form.Label>Bounty</Form.Label> */}
        <Form.Control type="input" placeholder="Bounty" />
      </Form.Group>
        </Col>
        </Row>
        <Row>
            <Col className='m-2'>
      <Form.Select aria-label="crew">
      <option>Select pirate crew</option>
      <option value="0">Strawhats</option>
      <option value="1">Heart</option>
      <option value="2">Big Mom</option>
      <option value="3">Whitebeard</option>
      <option value="4">Blackbeard</option>
      <option value="5">Revolutionary Army</option>
      <option value="6">Marine Corps</option>
      <option value="7">Donquixote</option>
      <option value="8">Roger</option>
      <option value="9">Redhaired</option>
      <option value="10">Beast</option>
    </Form.Select>
        </Col>
    </Row>
    <Row>
    <Col className='m-2'>
      <Form.Group className="mb-3" controlId="formFruit">
        {/* <Form.Label>Devil Fruit</Form.Label> */}
        <Form.Control type="input" label="Fruit" placeholder='Devil Fruit'/>
      </Form.Group>
        </Col>
        <Col className='m-2'>
      <Form.Group className="mb-3" controlId="formImg">
        {/* <Form.Label>Image URL</Form.Label> */}
        <Form.Control type="input" label="Image" placeholder='Image URL'/>
      </Form.Group>
        </Col>
        </Row>
      <Button variant="primary" type="submit">
        Submit Character
      </Button>
    </Form>
  );
}

export default AddCharacterForm;