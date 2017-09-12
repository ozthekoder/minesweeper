import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Board extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="board">
      BOARD
      </div>
    );
  }
}

Board.propTypes = {
};
