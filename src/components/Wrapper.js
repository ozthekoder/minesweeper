import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

export default class Wrapper extends Component {
  render() {
    debugger;
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

Wrapper.propTypes = {
  store: PropTypes.object.isRequired,
};
