import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {useDispatch} from 'react-redux';
import {SignOutLogo, ScanLogo, MenuLogo, BackLogo, NotesLogo, ApproveLogo} from '../icons';
import {MenuNavigation} from './MenuNavigation'
import {SignOutAction} from '../../actions/SignInAction';

// will render view for Active vouchers screen
export const ListActiveVouchersNavigation = ({navigation}) => {
  const dispatch = useDispatch();

  const signOut = () =>{
    dispatch(SignOutAction())
    navigation.navigate('Login')
  }
  
  return(
    <View style={NavigationStyles.navContainer}>

      <TouchableOpacity style={NavigationStyles.element} onPress={signOut}>
        <View style={NavigationStyles.logoStyle}>
          <SignOutLogo />
        </View>
        
        <Text style={NavigationStyles.menuText}>Log ud</Text>
      </TouchableOpacity>

      <TouchableOpacity style={NavigationStyles.element}>
        <View style={NavigationStyles.logoStyle}>
          <ScanLogo/>
        </View>
        
        <Text style={NavigationStyles.menuText}>Scan</Text>
      </TouchableOpacity>
      
      <MenuNavigation/>
      
    </View>
  )
}