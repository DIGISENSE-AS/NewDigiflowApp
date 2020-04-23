import React from 'react'; 
import {DrawerItems} from 'react-navigation-drawer';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {useSelector, useDispatch} from 'react-redux';
import {Logo, SignOutLogo} from '../icons';
import {SignOutAction} from '../../actions/SignInAction';

export const CostumDrawerNavigation = (props) => {
  const navigation = props.navigation; 
  const dispatch = useDispatch();
  const userToken = useSelector((state:any) => state.SignInReducer);

  // will remove all user data from memory and redirect back to sigin screen 
  const signOut = () =>{
    dispatch(SignOutAction())
    navigation.navigate('Login')
  }

  // closes drawer navigation
  const closeMenu = () => {
    navigation.closeDrawer();
  }

  return(
    <View>
      <View style={NavigationStyles.drawerHeader}>
        <View style={NavigationStyles.drawerLogoContainer} >
          <Logo logo={userToken.logoSVG}/>
        </View>
      </View>
      <ScrollView style={NavigationStyles.drawerNavigationOptions}>
        <DrawerItems {...props} />
      </ScrollView>
      
      <View style={NavigationStyles.drawerLinkContainer}>

        <TouchableOpacity style={NavigationStyles.drawerLink} onPress={closeMenu}>
          <Text style={NavigationStyles.drawerText}>Luk menu</Text>
          {/* <SignOutLogo style={NavigationStyles.drawerLogo}/> */}
        </TouchableOpacity>

        <TouchableOpacity style={NavigationStyles.drawerLink} onPress={signOut}>
          <Text style={NavigationStyles.drawerTextGrey}>Log ud</Text>
          {/* <SignOutLogo /> */}
        </TouchableOpacity>
      
       </View>
    </View>
  )
}

