import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {GlobalStyles} from '../style/GlobalStyles';
import {ScanVoucherNavigation} from '../style/navigation/ScanVoucherNavigation'


const ScanVoucherScreen = ({navigation}) =>{
  const [base64Image, setBase64Image] = useState('');
  let camera;

  const takePicture = async () =>{
    if(camera){
      const options ={quality: 0.50, base64: true, forceUpOrientation: true, fixOrientation: true, pauseAfterCapture: true }
    }
  }

  return(
    <View style={GlobalStyles.container} >
      <RNCamera captureAudio={false} style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}} ref={ref => (camera = ref)} type={RNCamera.Constants.Type.back}/>
      <ScanVoucherNavigation navigation={navigation}/>
    </View>
  )
}

export default ScanVoucherScreen;