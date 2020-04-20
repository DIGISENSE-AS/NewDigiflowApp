import ListAllVouchers from '../components/ListAllVouchers';
import ShowVoucher from '../components/ShowVoucher';
import ShowNotesScreen from '../components/ShowNotesScreen';
import { createStackNavigator } from 'react-navigation-stack';

const screens:any = {
  ListAllVouchers: {
    screen: ListAllVouchers
  },
  ShowVoucher: {
    screen: ShowVoucher
  },
  ShowNotesScreen: {
    screen: ShowNotesScreen
  }
}

export const AllVouchersStack = createStackNavigator(screens);