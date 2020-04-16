import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView, TextInput} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {MenuNavigation} from './MenuNavigation';
import {BackLogo, NotesLogo, ApproveLogo} from '../icons';

export const ShowNotesNavigation = ({navigation}) => {
  
  const goBack = () => {
    navigation.navigate('ShowActiveVoucher')
  }

  const goToNotes = () => {
    navigation.navigate('ShowNotesScreen')
  }

  return(
    <View style={NavigationStyles.navContainer}>
      <TouchableOpacity style={NavigationStyles.element} onPress={goBack}>
      <View style={NavigationStyles.logoStyle}>
        <BackLogo/>
      </View>
      
        <Text style={NavigationStyles.menuText}>Tilbage</Text>
      </TouchableOpacity>

      <MenuNavigation/>
      
    </View>
  )
}