import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Col } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={2}
        onClick={this.toggleSelected}
        role='button'
        tabIndex='0'
      >
        <Card
          className={`book-cover d-flex flex-column pointer h-100 ${
            selected ? 'border-3 border-danger' : ''
          }`}
        >
          <Card.Img
            variant='top'
            src={book.img}
            style={{ height: '350px', objectFit: 'cover' }}
          />
          <Card.Body className='d-flex flex-column'>
            <Card.Title className='fs-6'>{book.title}</Card.Title>
            <Card.Text className='text-danger fw-bolder'>{`Prezzo: €${book.price}`}</Card.Text>
            <Button variant='primary' className='mt-auto'>
              Compra
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
