import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView, TextInput} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {MenuNavigation} from './MenuNavigation';
import {TakePictureLogo} from '../icons';

export const ScanVoucherNavigation = ({navigation, takePicture}) => {
  
  const goBack = () => {
    navigation.goBack();
  }

  return(
    <View style={NavigationStyles.navContainer}>

      <TouchableOpacity style={NavigationStyles.element} onPress={goBack}>
        
      </TouchableOpacity>

      <TouchableOpacity style={NavigationStyles.element} onPress={takePicture}>
        <View style={NavigationStyles.logoStyle}>
          <TakePictureLogo/>
        </View>
      
        <Text style={NavigationStyles.menuText}>Tag billede</Text>
      </TouchableOpacity>

      <MenuNavigation navigation={navigation}/>
      
    </View>
  )
}