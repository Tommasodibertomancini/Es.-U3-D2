import { Row, Form } from 'react-bootstrap';
import { Component } from 'react';
import SingleBook from './SingleBook';
import history from '../data/history.json';

class BookList extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    const { searchQuery } = this.state;
    const filteredBooks = history.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div>
        <Form.Control
          type='text'
          placeholder='Cerca un libro...'
          value={searchQuery}
          onChange={this.handleSearchChange}
          className='mb-3'
        />
        <Row className='g-2'>
          {filteredBooks.map((book) => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </Row>
      </div>
    );
  }
}

export default BookList;
