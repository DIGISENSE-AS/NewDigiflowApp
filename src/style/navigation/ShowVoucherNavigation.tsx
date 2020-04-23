import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView, TextInput} from 'react-native';
import {NavigationStyles} from '../NavigationStyles';
import {useSelector} from 'react-redux';
import {ModalStyles} from '../ModalStyles';
import {MenuNavigation} from './MenuNavigation';
import {BackLogo, NotesLogo, ApproveLogo} from '../icons';

export const ShowVoucherNavigation = ({navigation, voucherToken, voucherStatus, setShowModal}) => {
  const goBack = () => {
    navigation.goBack()
  }

  const goToNotes = () => {
    navigation.navigate('ShowNotesScreen', voucherToken)
  }

  const openModal = () => setShowModal(true)

  return(
    <View style={NavigationStyles.navContainer}>
      <TouchableOpacity style={NavigationStyles.element} onPress={goBack}>
      <View style={NavigationStyles.logoStyle}>
        <BackLogo/>
      </View>
      
        <Text style={NavigationStyles.menuText}>Tilbage</Text>
      </TouchableOpacity>

      {voucherStatus !== 'INPROC' ? 
        <TouchableOpacity style={NavigationStyles.element} onPress={goToNotes}>
          <View style={NavigationStyles.logoStyle}>
            <NotesLogo/>
          </View>
          
          <Text style={NavigationStyles.menuText}>Noter</Text>
        </TouchableOpacity> :

        <TouchableOpacity style={NavigationStyles.element} onPress={openModal}>
          <View style={NavigationStyles.logoStyle}>
            <NotesLogo/>
          </View>

          <Text style={NavigationStyles.menuText}>HåndterBilag</Text>
        </TouchableOpacity>
      }
      

      <MenuNavigation navigation={navigation}/>
      
    </View>
  )
}
