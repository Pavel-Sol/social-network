
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import {Provider} from 'react-redux'



let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

rerenderEntireTree (store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals();
