import React from 'react';

import Books from './Books';
import AddBookForm from './AddBookForm';
import Navbar from './Navbar';
import EditBookForm from './EditBookForm';
import { Consumer } from '../context';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'viewBooks'
    };
  }

  switchRoute = route => {
    this.setState({ route: route });
  };

  /* 
    Create an EditBookForm component - This will mostly be a copy of our AddBookForm
    Make your page reroute to it after the edit button in any book is clicked
  */

  editBook = id => {
    // Grab the book that has been clicked on
    const index = this.state.bookArray.findIndex(book => book.id === id);

    this.setState({
      route: 'editBook',
      currentBook: this.state.bookArray[index]
    });
  };

  updateBook = updatedBook => {
    const updatedArray = this.state.bookArray;

    // findIndex takes a conditional to check against all array items and returns the index of the first one that matches the query.
    const index = updatedArray.findIndex(book => book.id === updatedBook.id);

    // Change the item that was found to be the new book
    updatedArray[index] = updatedBook;

    // Update the bookArray and force a rerender on the page.
    this.setState({ bookArray: updatedArray });
  };

  /* Remove the book from the array based on the ID */
  deleteBook = id => {
    // Get all the books that are NOT the one that we want to delete.
    const newBooksArray = this.state.bookArray.filter(book => book.id !== id);

    // 2 Alternates:
    // const index = this.state.bookArray.findIndex(book => book.id === id);
    // const newBooksArray = this.state.bookArray
    //   .slice(0, index)
    //   .concat(this.state.bookArray.slice(index + 1));

    // const newBooksArray = this.state.bookArray;
    // newBooksArray.splice(index, 1);

    this.setState({ bookArray: newBooksArray });
  };

  render() {
    let element;
    switch (this.state.route) {
      case 'viewBooks': {
        element = (
          <Consumer>
            {store => {
              // Write the consumer first, then cut and paste the elements into it.
              const { bookArray } = store; // Destructure bookArray if desired
              return (
                <Books
                  bookArray={store.bookArray}
                  editBook={this.editBook}
                  deleteBook={this.deleteBook}
                />
              );
            }}
          </Consumer>
        );
        break;
      }
      case 'addBook': {
        element = <AddBookForm switchRoute={this.switchRoute} />;
        break;
      }
      case 'editBook': {
        element = (
          <EditBookForm
            onSubmit={this.updateBook.bind(this)}
            switchRoute={this.switchRoute}
            book={this.state.currentBook}
          />
        );
        break;
      }
    }
    /*
      Add a way for the AddBook element to re-route back to 
      the BookList view after a book has been added.
    */
    return (
      <div>
        <Navbar switchRoute={this.switchRoute} />
        {element}
      </div>
    );
  }
}

export default BookList;
