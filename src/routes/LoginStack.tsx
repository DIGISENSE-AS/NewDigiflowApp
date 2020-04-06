import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import AuthLoadingScreen from '../components/AuthLoadingScreen';

const screens:any = {
  Login:{
    screen: LoginScreen
  }, 
  AuthLoadingScreen: {
    screen: AuthLoadingScreen
  }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack)