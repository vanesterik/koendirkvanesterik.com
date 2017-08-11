import 'normalize-css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.css';
import 'socicon/css/socicon.css';

// Wrapper
import React, { Component } from 'react';
import './Wrapper.css';

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        { this.props.children }
      </div>
    );
  }
}

export default Wrapper;