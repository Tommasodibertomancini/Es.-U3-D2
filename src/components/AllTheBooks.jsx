import { Row, Col, Card } from 'react-bootstrap';
import history from '../data/history.json';
import Button from 'react-bootstrap/Button';


const AllTheBooks = function () {
  return (
    <Row className='g-2'>
      {history.map((book) => {
        return (
          <Col xs={12} sm={6} md={4} lg={2} key={book.asin}>
            <Card className='d-flex flex-column h-100'>
              <Card.Img
                variant='top'
                src={book.img}
                style={{ height: '350px', objectFit: 'cover' }}
              />
              <Card.Body className='d-flex flex-column'>
                <Card.Title className='fs-6'>{book.title}</Card.Title>
                <Card.Text className='text-danger fw-bolder'>{`Prezzo: €${book.price}`}</Card.Text>
                <Button variant='primary' className='mt-auto'>Compra</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
