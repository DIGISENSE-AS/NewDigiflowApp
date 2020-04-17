import ListActiveVouchers from '../components/ListActiveVouchers';
import ShowActiveVoucher from '../components/ShowActiveVoucher';
import ShowNotesScreen from '../components/ShowNotesScreen';
import { createStackNavigator } from 'react-navigation-stack';

const screens:any = {
  ListActiveVouchers: {
    screen: ListActiveVouchers
  },
  ShowActiveVoucher: {
    screen: ShowActiveVoucher
  },
  ShowNotesScreen: {
    screen: ShowNotesScreen
  }
}

export const ActiveVouchersStack = createStackNavigator(screens);