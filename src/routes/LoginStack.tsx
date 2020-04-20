import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../components/LoginScreen';
import LoadingScreen from '../components/LoadingScreen';
import ListActiveVouchers from '../components/ListActiveVouchers';
import ShowActiveVoucher from '../components/ShowActiveVoucher';
import ShowNotesScreen from '../components/ShowNotesScreen';

const screens:any = {
  Login:{
    screen: LoginScreen
  }, 
  LoadingScreen: {
    screen: LoadingScreen
  }, 
}

export const LoginStack = createStackNavigator(screens);

