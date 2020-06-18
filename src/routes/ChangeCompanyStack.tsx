import React from 'react'; 
import ChangeCompanyScreen from '../components/ChangeCompanyScreen';
import Header from '../style/Header';
import {createStackNavigator} from 'react-navigation-stack'

const screens:any = {
  ChangeCompanyScreen: {
    screen: ChangeCompanyScreen,
    navigationOptions: {
      header: () =>  <Header title='Skift selskab'/>
    }
  }
}

export const ChangeCompanyStack = createStackNavigator(screens);