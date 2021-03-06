import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App/App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import ReduxSagaFirebase from 'redux-saga-firebase';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './store/rootSaga';

const myFirebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);
const sagaMiddleware = createSagaMiddleware();

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={
        {
          firebase,
          auth,
          firestore,
        } as any
      }
    >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
