import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export {store};

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
