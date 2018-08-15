import React, { Component } from 'react';

import BookList from './components/BookList';
import { Provider } from './context';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <BookList />
      </Provider>
    );
  }
}
