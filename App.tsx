import React from 'react';
import AllReducers from './src/reducers/index';
import ListActiveVouchers from './src/components/ListActiveVouchers'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Navigator from './src/routes/DrawerNavigation'

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(thunk))); 

const App = () => {
  return(
    <Provider store={store}>
      {/* <ListActiveVouchers/> */}
      <Navigator/>
    </Provider>
  )
}

export default App