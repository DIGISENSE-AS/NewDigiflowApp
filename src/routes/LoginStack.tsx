import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import LoadingScreen from '../components/LoadingScreen';
import ListActiveVouchers from '../components/ListActiveVouchers';

const screens:any = {
  Login:{
    screen: LoginScreen
  }, 
  LoadingScreen: {
    screen: LoadingScreen
  }, 
  ListActiveVouchers: {
    screen: ListActiveVouchers
  }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack)