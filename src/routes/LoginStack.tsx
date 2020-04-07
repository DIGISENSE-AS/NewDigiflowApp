import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import ListActiveVouchers from '../components/ListActiveVouchers';

const screens:any = {
  Login:{
    screen: LoginScreen
  }, 
  AuthLoadingScreen: {
    screen: AuthLoadingScreen
  }, 
  ListActiveVouchers: {
    screen: ListActiveVouchers
  }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack)