import React from 'react';
import Book from './Book';

export default props => {
  const divStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5px',
    padding: '10px'
  }; // Alternate way to do styling in JS
  return (
    <div className="grid-container" style={divStyle}>
      {props.bookArray.map((book, index) => (
        <Book
          key={`book-${index}`}
          book={book}
          editBook={props.editBook}
          deleteBook={props.deleteBook}
        />
      ))}
    </div>
  );
};
