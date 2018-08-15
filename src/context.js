// context.js
import React from 'react';
import uuid from 'uuid';

const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    bookArray: [
      {
        id: uuid(),
        title: 'Harry Potter',
        description: 'Wizard School stuff',
        author: 'JK Rowling',
        price: '14.99'
      },
      {
        id: uuid(),
        title: 'Name of the Wind',
        description: 'Edgy Wizard school stuff',
        author: 'Patrick Rothfuss',
        price: '12.50'
      },
      {
        id: uuid(),
        title: 'Wheel of Time',
        description: 'A few High fantasy novels',
        author: 'Robert Jordan',
        price: '19.99'
      }
    ],
    currentBook: null
  };

  render() {
    // On Context.Provider, value is what is made available to all of the children of this component. We use this.state, so everything in this components state will be available to use by the children.
    // Then we place the children within the Provider so that everything will render properly.
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
