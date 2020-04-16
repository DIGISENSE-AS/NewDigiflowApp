import React from 'react'; 
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {MenuLogo} from '../icons';


// reocouring navigation element mooved out of other navigation files to limit redundancy
export const MenuNavigation = () => {
  return (
    <TouchableOpacity style={NavigationStyles.element}>
      <View style={NavigationStyles.logoStyle}>
        <MenuLogo/>
      </View>

      <Text style={NavigationStyles.menuText}>Menu</Text>
    </TouchableOpacity>
  )
}