import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {CostumDrawerNavigation} from '../style/navigation/CustomDrawerNavigation';
import {LoginStack} from './LoginStack';
import {ActiveVouchersStack} from './ActiveVouchersStack';
import {AllVouchersStack} from './AllVouchersStack';
<<<<<<< HEAD
import {ScanVoucherStack} from './ScanVoucherStack'
import ScanVoucherScreen from '../components/ScanVoucherScreen';
=======
import {ScanVoucherStack} from './ScanVoucherStack';
>>>>>>> c4cccf8c6d86ff5b5aa245558db3bc071c7a4659


// will act as the main navigation handeler
// will work with navigations menu button and open a modal that people can choose witch screen they want to be on
// the drawer navigation can take bot stack and screens in as parameters for navigation.
const MenuNavigator = createDrawerNavigator({
  login:{
    screen: LoginStack,
    navigationOptions:{
      drawerLabel: () => null
    }
  },
  ActiveVouchers:{
    screen: ActiveVouchersStack,
    navigationOptions:{
      title: 'Frigiv/Godkend bilag'
    }
  },
  AllVouchers:{
    screen: AllVouchersStack,
    navigationOptions:{
      title: 'Arkiv'
    }
  },
  ScanVoucher:{
    screen: ScanVoucherScreen,
    navigationOptions:{
      title: 'Scan bilag'
    }
  },
},{
  initialRouteName: 'login',
  contentComponent: CostumDrawerNavigation,
  
  drawerPosition: 'right',
})


export default createAppContainer(MenuNavigator)