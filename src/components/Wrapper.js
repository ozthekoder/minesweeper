import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Board from '../containers/Board';

export default class Wrapper extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    );
  }
}

Wrapper.propTypes = {
  store: PropTypes.object.isRequired,
};
