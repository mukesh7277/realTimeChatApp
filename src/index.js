import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import {Provider} from 'react-redux'
import store from './store';


const firebaseConfig = {
  apiKey: "AIzaSyBP05tpGIR2pgD8_IuKafnlMQKq-YsodzU",
  authDomain: "chat-app-df488.firebaseapp.com",
  databaseURL: "https://chat-app-df488-default-rtdb.firebaseio.com",
  projectId: "chat-app-df488",
  storageBucket: "chat-app-df488.appspot.com",
  messagingSenderId: "102395829279",
  appId: "1:102395829279:web:56c4dc33ec2c5fc915492a",
  measurementId: "G-PX2GHPJ9SR"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

