import {StyleSheet} from 'react-native';

// will handle all the styling for the bottom navigation menus
export const NavigationStyles = StyleSheet.create({
  navContainer:{
    width: '100%',
    height: 70,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    bottom: 0,
  },

  element:{
    height: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  menuText:{
    color: 'grey',
    fontSize: 13,
  },

  logoStyle:{
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'  
  },

  drawerHeader:{
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    backgroundColor: '#131C8D'
  },

  drawerLogoContainer:{
    height: 100,
    width: 100,
  },

  drawerNavigationOptions:{
    height: '60%',
    margin: 0
  },

  drawerLinkContainer:{
    height: '20%'
  },

  drawerLink:{
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    backgroundColor: '#fafafa'
  },

  drawerLogo:{
    alignSelf: 'flex-end'
  },

  drawerText: {
    fontWeight: 'bold'
  }

})