import React from 'react';
import ListActiveVouchersScreen from '../components/ListActiveVouchersScreen';
import ShowVoucherScreen from '../components/ShowVoucherScreen';
import ShowNotesScreen from '../components/ShowNotesScreen';
import RejectVoucherScreen from '../components/RejectVoucherScreen';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../style/Header'

const screens:any = {
  ListActiveVouchers: {
    screen: ListActiveVouchersScreen,
    navigationOptions: {
      header: () =>  <Header title='Håndter bilag'/>
    }
  },
  ShowVoucher: {
    screen: ShowVoucherScreen,
    navigationOptions: {
      header: () =>  <Header title='Vis bilag'/>
    },
  },
  ShowNotesScreen: {
    screen: ShowNotesScreen,
    navigationOptions: {
      header: () =>  <Header title='Noter'/>
    }
  },

  RejectVoucherScreen: {
    screen: RejectVoucherScreen,
    navigationOptions: {
      header: () =>  <Header title='Afvis bilag'/>
    }
  },

}

export const ActiveVouchersStack = createStackNavigator(screens);