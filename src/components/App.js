import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../containers/Board';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
}

App.propTypes = {
};
