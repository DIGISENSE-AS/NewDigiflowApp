import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {CostumDrawerNavigation} from '../style/navigation/CustomDrawerNavigation';
import {SignInStack} from './SignInStack';
import {ActiveVouchersStack} from './ActiveVouchersStack';
import {AllVouchersStack} from './AllVouchersStack';
import {ScanVoucherStack} from './ScanVoucherStack';
import {ChangeCompanyStack} from './ChangeCompanyStack';


// will act as the main navigation handeler
// will work with navigations menu button and open a modal that people can choose witch screen they want to be on
// the drawer navigation can take bot stack and screens in as parameters for navigation.
const MenuNavigator = createDrawerNavigator({
  login:{
    screen: SignInStack,
    navigationOptions:{
      drawerLabel: () => null
    }
  },
  ActiveVouchers:{
    screen: ActiveVouchersStack,
    navigationOptions:{
      title: 'Håndter bilag'
    }
  },
  AllVouchers:{
    screen: AllVouchersStack,
    navigationOptions:{
      title: 'Arkiv'
    }
  },
  ScanVoucher:{
    screen: ScanVoucherStack,
    navigationOptions:{
      title: 'Scan bilag'
    }
  },
  ChangeCompanyStack: {
    screen: ChangeCompanyStack,
    navigationOptions: {
      title: 'Skift selskab'
    }
  }
},{
  initialRouteName: 'login',
  contentComponent: CostumDrawerNavigation,
  
  drawerPosition: 'right',
})


export default createAppContainer(MenuNavigator)