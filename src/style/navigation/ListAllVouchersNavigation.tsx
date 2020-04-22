import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {MenuNavigation} from './MenuNavigation'

// will render view for Active vouchers screen
export const ListAllVouchersNavigation = ({navigation}) => {

  return(
    <View style={NavigationStyles.navContainer}>

      <TouchableOpacity style={NavigationStyles.element}></TouchableOpacity>
        
      <TouchableOpacity style={NavigationStyles.element}>
      </TouchableOpacity>
      
      <MenuNavigation navigation={navigation}/>
      
    </View>
  )
}