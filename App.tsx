import React, {useEffect} from 'react';
import AllReducers from './src/reducers/index';
import messaging from '@react-native-firebase/messaging';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Navigator from './src/routes/DrawerNavigation'
import { Alert } from 'react-native';

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(thunk)));




const App = () => {
  useEffect(() => {
    getPushMessage();
    requestUserPermission();
  },[])


  const requestUserPermission = async () => {
    const permission = await messaging().requestPermission({
      sound: true,
      announcement: true
    });

    if(permission){
      console.log('got permission', permission)
    }
  }

  const getPushMessage = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(remoteMessage.notification.title, remoteMessage.notification.body)
    });

    return unsubscribe
  }

  return(
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}

export default App