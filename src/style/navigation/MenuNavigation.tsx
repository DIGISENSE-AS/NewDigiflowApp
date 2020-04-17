import React, {useState} from 'react'; 
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {MenuLogo} from '../icons';


// reocouring navigation element mooved out of other navigation files to limit redundancy
// will activate drawer navigation when pressed
export const MenuNavigation = ({navigation}) => {
  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <TouchableOpacity style={NavigationStyles.element} onPress={openMenu}>
      <View style={NavigationStyles.logoStyle}>
        <MenuLogo/>
      </View>

      <Text style={NavigationStyles.menuText}>Menu</Text>
    </TouchableOpacity>
  )
}