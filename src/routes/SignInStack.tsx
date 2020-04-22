import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from '../components/SignInScreen';
import LoadingScreen from '../components/LoadingScreen';


const screens:any = {
  Login:{
    screen: SignInScreen,
    navigationOptions:{
      headerShown: false
    }
  }, 
  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions:{
      headerShown: false
    }
  }, 
}

export const SignInStack = createStackNavigator(screens);

