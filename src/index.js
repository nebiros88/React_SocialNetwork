import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Sergey' },
  { id: 2, name: 'Svetlana' },
  { id: 3, name: 'Hleb' }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Bla' }
];

let posts = [
  { id: 1, message: 'Hi', likeCounter: 15 },
  { id: 2, message: 'It is is my first post', likeCounter: 10 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogs} messagesData={messages} postsData={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
