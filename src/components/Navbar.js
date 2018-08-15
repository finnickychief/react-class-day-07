import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ cursor: 'pointer' }}
                onClick={this.props.switchRoute.bind(this, 'viewBooks')}
              >
                View <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: 'pointer' }}
                onClick={this.props.switchRoute.bind(this, 'addBook')}
              >
                Add
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
