import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationStyles} from './NavigationStyles';
import {useDispatch} from 'react-redux';
import {SignOutLogo, ScanLogo, MenuLogo, BackLogo, NotesLogo, ApproveLogo} from './icons';
import {SignOutAction} from '../actions/SignInAction';

// will render view for Active vouchers screen
export const ActiveVouchersNavigation = ({navigation}) => {
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
      
      <TouchableOpacity style={NavigationStyles.element}>
        <View style={NavigationStyles.logoStyle}>
          <MenuLogo/>
        </View>

        <Text style={NavigationStyles.menuText}>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}

export const ActiveVoucherNavigation = ({navigation}) => {
  const dispatch = useDispatch();

  const goBack = () => {
    navigation.navigate('ListActiveVouchers')
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
      
      <TouchableOpacity style={NavigationStyles.element}>
        <View style={NavigationStyles.logoStyle}>
          <NotesLogo/>
        </View>
        
        <Text style={NavigationStyles.menuText}>Noter</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={NavigationStyles.element}>
        <View style={NavigationStyles.logoStyle}>
          <MenuLogo/>
        </View>

        <Text style={NavigationStyles.menuText}>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}