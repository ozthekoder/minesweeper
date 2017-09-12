import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Wrapper from './components/Wrapper';
import './styles/style.scss';
require('./favicon.ico');
const store = configureStore();

render(
  <AppContainer>
    <Wrapper store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Wrapper', () => {
    const ActualWrapper = require('./components/Wrapper').default;
    render(
      <AppContainer>
        <ActualWrapper store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
