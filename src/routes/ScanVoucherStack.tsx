import {createStackNavigator} from 'react-navigation-stack';

import ScanVoucherScreen from '../components/ScanVoucherScreen';



const screens:any = {
  Scan:{
    screen: ScanVoucherScreen,
  }
}

export const ScanVoucherStack = createStackNavigator(screens);