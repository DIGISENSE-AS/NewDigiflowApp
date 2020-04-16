import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView, TextInput} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {useSelector} from 'react-redux';
import {ModalStyles} from '../ModalStyles';
import {MenuNavigation} from './MenuNavigation';
import {BackLogo, NotesLogo, ApproveLogo} from '../icons';

export const ShowActiveVoucherNavigation = ({navigation}) => {
  
  const goBack = () => {
    navigation.navigate('ListActiveVouchers')
  }

  const goToNotes = () => {
    navigation.navigate('ShowNotesScreen')
  }

  const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp); 
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  return(
    <View style={NavigationStyles.navContainer}>
      <TouchableOpacity style={NavigationStyles.element} onPress={goBack}>
      <View style={NavigationStyles.logoStyle}>
        <BackLogo/>
      </View>
      
        <Text style={NavigationStyles.menuText}>Tilbage</Text>
      </TouchableOpacity>

      <TouchableOpacity style={NavigationStyles.element} >
        <View style={NavigationStyles.logoStyle}>
          <ApproveLogo />
        </View>
        
        <Text style={NavigationStyles.menuText}>Godkend/frigiv</Text>
      </TouchableOpacity>

      <TouchableOpacity style={NavigationStyles.element} onPress={goToNotes}>
        <View style={NavigationStyles.logoStyle}>
          <NotesLogo/>
        </View>
        
        <Text style={NavigationStyles.menuText}>Noter</Text>
      </TouchableOpacity>

      <MenuNavigation/>
      
    </View>
  )
}
