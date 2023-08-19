import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard({photo,title,price,rate}) {
  return (
    <Col sm={12} md={2} className='g-2'>
      <Card style={{overflow:"hidden"}} className='bg-dark text-light'>
        <Card.Img className='cardimg' variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {rate} &#9733;&#9733;&#9733;&#9733;&#9734;
          </Card.Text>
          <Button variant="outline-danger px-4">Watch Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleCard;