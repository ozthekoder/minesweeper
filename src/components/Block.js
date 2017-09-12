import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Block extends Component {
  render() {
    const { cleared, mine, flagged, index, x, y, numOfMines } = this.props;
    let cls = '';
    if (flagged) cls = 'flagged';
    else if (cleared) cls = `number-${numOfMines}`;
    else cls = 'default';


    const style = {
      left: `${x * 16}px`,
      top: `${y * 16}px`
    }
    return (
      <div data-index={index} className={`block ${cls}`} style={style}>
      </div>
    );
  }
}

Block.propTypes = {
};
