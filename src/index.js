import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dataPost = [
  { id: 1, message: 'hi, how are you', likesCount: 7 },
  { id: 2, message: 'hi, check my new photo', likesCount: 1 },
]

let dataName = [
  { id: 1, name: 'Victor' },
  { id: 2, name: 'Sergeyr' },
  { id: 3, name: 'Marina' }
]

let dataMessage = [
  { id: 1, text: 'hello' },
  { id: 2, text: 'How are you' },
  { id: 3, text: 'yo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App dataPost={dataPost} dataName={dataName} dataMessage={dataMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
