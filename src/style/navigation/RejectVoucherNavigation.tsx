import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {MenuNavigation} from './MenuNavigation';
import {BackLogo} from '../icons';

export const RejectVoucherNavigation = ({navigation}) => {
  
  const goBack = () => {
    navigation.goBack();
  }

  return(
    <View style={NavigationStyles.navContainer}>

      <TouchableOpacity style={NavigationStyles.element} onPress={goBack}>
        <View style={NavigationStyles.logoStyle}>
          <BackLogo/>
        </View>
      
        <Text style={NavigationStyles.menuText}>Tilbage</Text>
      </TouchableOpacity>

      <TouchableOpacity style={NavigationStyles.element} ></TouchableOpacity>

      <MenuNavigation navigation={navigation}/>
      
    </View>
  )
}