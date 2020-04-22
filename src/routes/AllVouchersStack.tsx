import React from 'react'
import ListAllVouchersScreen from '../components/ListAllVouchersScreen';
import ShowVoucherScreen from '../components/ShowVoucherScreen';
import ShowNotesScreen from '../components/ShowNotesScreen';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../style/Header'

const screens:any = {
  ListAllVouchers: {
    screen: ListAllVouchersScreen,
    navigationOptions: {
      header: <Header title='Arkiv'/>
    }
  },
  ShowVoucher: {
    screen: ShowVoucherScreen,
    navigationOptions: {
      header: <Header title='Vis bilag'/>
    }
  },
  ShowNotesScreen: {
    screen: ShowNotesScreen,
    navigationOptions: {
      header: <Header title='Noter'/>
    }
  }
}

export const AllVouchersStack = createStackNavigator(screens);