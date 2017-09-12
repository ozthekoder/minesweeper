import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Block from './Block';

export default class Board extends Component {
  onBlockCleared(e) {
    if(!this.props.lost) {
      const { target } = e;
      const { index } = target.dataset;
      const { actions } = this.props;
      actions.revealBlock(Number(index));
    }
  }

  onBlockFlagged(e) {
    if(!this.props.lost) {
      const { target } = e;
      const { index } = target.dataset;
      const { actions } = this.props;
      actions.flagBlock(Number(index));
    }
  }

  renderStatus() {
    const { board } = this.props;
    const { width, height, lost } = board;
    if(lost) {
      return <h2>Game Lost</h2>
    }
  }

  render() {
    const { board, actions } = this.props;
    const { width, height, lost } = board;
    const style= { width: `${width * 16 + 6}px`, height: `${height * 16 + 6}px` };
    const blocks = board.spots.map((spot, key) => <Block key={key} x={key % board.width} y={Math.floor(key / board.width)}  {...spot} index={key} />);
    return (
      <div className="container">
        <div onContextMenu={this.onBlockFlagged.bind(this)} onClick={this.onBlockCleared.bind(this)} className="board" style={style}>
        {blocks}
        {this.renderStatus()}
        </div>
        <div className="panel">
          <button onClick={actions.startNewGame}>Start New Game</button>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
};
