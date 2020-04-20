import ListActiveVouchers from '../components/ListActiveVouchers';
import ShowVoucher from '../components/ShowVoucher';
import ShowNotesScreen from '../components/ShowNotesScreen';
import { createStackNavigator } from 'react-navigation-stack';

const screens:any = {
  ListActiveVouchers: {
    screen: ListActiveVouchers
  },
  ShowVoucher: {
    screen: ShowVoucher
  },
  ShowNotesScreen: {
    screen: ShowNotesScreen
  }
}

export const ActiveVouchersStack = createStackNavigator(screens);