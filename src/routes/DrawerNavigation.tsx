import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {LoginStack} from './LoginStack';
import {ActiveVouchersStack} from './ActiveVouchersStack';

const MenuNavigator = createDrawerNavigator({
  login:{
    screen: LoginStack,
  },
  ActiveVouchers:{
    screen: ActiveVouchersStack,
  }
})


export default createAppContainer(MenuNavigator)