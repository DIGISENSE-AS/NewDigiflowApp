import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'; 
import {GlobalStyles} from '../style/GlobalStyles';
import {RejectVoucherNavigation} from '../style/navigation/RejectVoucherNavigation'


const RejectVoucherScreen = ({navigation}) => {
  return(
    <View style={GlobalStyles.Container}>
      <View style={GlobalStyles.rejectContainer}>
        <View>
          <Text style={GlobalStyles.rejectText}>Du er ved at afvise godkendelsen for bilag 453425 fra 'Kontormarkedet A/S'.</Text>
          <Text style={GlobalStyles.rejectText}>Skriv begrundelsen nedenfor:</Text>
        </View>
        
        <TextInput style={GlobalStyles.rejectTextBox}></TextInput>
        
        <TouchableOpacity style={GlobalStyles.rejectButton} >
          <Text style={GlobalStyles.rejectTextBoxText}>Send bilaget tilbage til Gunner Reesen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.rejectButton} >
          <Text style={GlobalStyles.rejectTextBoxText}>Behold bilaget i egen indbakke</Text>
        </TouchableOpacity>
      </View>
      <RejectVoucherNavigation navigation={navigation}/>
    </View>
  )
}

export default RejectVoucherScreen;