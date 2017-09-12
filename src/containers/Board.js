import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/board-actions';
import Board from '../components/Board';

export const BoardContainer = (props) => {
  return (
    <Board
      {...props}
    />
  );
};

BoardContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  board: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    board: state.board
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
