import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ScanVoucherScreen from '../components/ScanVoucherScreen';
import Header from '../style/Header';

const screens:any = {
  ScanVoucher:{
    screen: ScanVoucherScreen,
    navigationOptions: {
      header: <Header title='Scan bilag'/>
    }
  }
}

export const ScanVoucherStack = createStackNavigator(screens);


