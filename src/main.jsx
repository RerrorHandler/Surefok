import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Router from './components/ui/Router'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCgEAH-jy6kyWR6Y-5Utrn6qkfvUAU26G0",
  authDomain: "surefok.firebaseapp.com",
  projectId: "surefok",
  storageBucket: "surefok.appspot.com",
  messagingSenderId: "1041204713295",
  appId: "1:1041204713295:web:1923e2b84839426cef573a",
  measurementId: "G-EKMKE24P7X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <Router />
  </Provider>,
)
