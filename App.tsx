import React from 'react';
import AllReducers from './src/reducers/index';
import Login from './src/components/login';
import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(thunk))); 

const App = () => {
  return(
    <Provider store={store}>
      <AuthLoadingScreen/>
    </Provider>
  )
}

export default App