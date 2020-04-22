import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {ScanLogo} from '../icons';
import {MenuNavigation} from './MenuNavigation'

// will render view for Active vouchers screen
export const ListActiveVouchersNavigation = ({navigation}) => {

  const goToScan = () => {
    navigation.navigate('ScanVoucher')
  }
  
  return(
    <View style={NavigationStyles.navContainer}>

      <TouchableOpacity style={NavigationStyles.element}></TouchableOpacity>
        
      <TouchableOpacity style={NavigationStyles.element} onPress={goToScan}>
        <View style={NavigationStyles.logoStyle}>
          <ScanLogo/>
        </View>
        
        <Text style={NavigationStyles.menuText}>Scan bilag</Text>
      </TouchableOpacity>
      
      <MenuNavigation navigation={navigation}/>
      
    </View>
  )
}