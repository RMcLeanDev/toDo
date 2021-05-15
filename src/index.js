import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const render = (Component) => { 
  ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Component />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
  );
}


render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
