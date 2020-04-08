import {StyleSheet} from 'react-native';

// will handle all the styling for the bottom navigation menus
export const NavigationStyles = StyleSheet.create({
  navContainer:{
    maxWidth: '100%',
    height: 80,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  }
})