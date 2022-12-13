import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componetes/App';


// adding firebase into project
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDP3t3hPFAiLmLXlPE1ozxs9naPVabxacs",
  authDomain: "my-cart-store.firebaseapp.com",
  projectId: "my-cart-store",
  storageBucket: "my-cart-store.appspot.com",
  messagingSenderId: "630859030809",
  appId: "1:630859030809:web:6886715b31aa4da2ee6588"
};

firebase.initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
