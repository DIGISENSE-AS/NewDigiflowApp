import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Image, TouchableOpacity, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RNCamera} from 'react-native-camera';
import {GlobalStyles} from '../style/GlobalStyles';
import {ScanVoucherNavigation} from '../style/navigation/ScanVoucherNavigation';
import { SendScanedVoucherAction } from '../actions/SendScanedVoucherAction';


const ScanVoucherScreen = ({navigation}) =>{
  const dispatch = useDispatch();
  const [base64Image, setBase64Image] = useState('');
  const [showImage, setShowImage] = useState(false);
  const userToken = useSelector((state:any) => state.SignInReducer.token);
  const SendScanedVoucherReducer = useSelector((state:any) => state.SendScanedVoucherReducer);
  let camera;

  // handles data pick from camera and sets image state to a base64 string 
  const takePicture = async () =>{
    if(camera){
      const options ={quality: 0.50, base64: true, forceUpOrientation: true, fixOrientation: true, pauseAfterCapture: true }
      const data = await camera.takePictureAsync(options); 
      setBase64Image(data.base64);
      setShowImage(true);
    }
  }

  const closeModal = () => setShowImage(false)

  // sends base64inage state to backend, and delivers an alert based on the response from the server.
  const SendScanedVoucher = () => {
    dispatch(SendScanedVoucherAction(userToken, base64Image));
    if(SendScanedVoucherReducer === true){
      Alert.alert("Bilaget er sendt", "Bilaget er nu sendt til rette ansvarlige i Digiflow.");
    }else{
      Alert.alert("Send bilag", "Kunne ikke sende bilag. Kontakt Digisense support, og prøv igen senere.");
    }
    setShowImage(false);
  }

  return(
    <View style={GlobalStyles.container} >
      <RNCamera captureAudio={false} style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}} ref={ref => (camera = ref)} type={RNCamera.Constants.Type.back}/>

      <Modal type='slide' transparent={false} visible={showImage}>
        <Image source={{uri: `data:image/jpg;base64,${base64Image}`}} style={{height: '90%', width: '100%'}}/>
        
        <View style={{width: '100%', height: '10%', flexDirection: 'row',  justifyContent: 'space-evenly', alignItems: 'center'}}>
          <TouchableOpacity style={GlobalStyles.button} onPress={closeModal}>
            <Text style={GlobalStyles.buttonText}>Kasser billede</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={GlobalStyles.button} onPress={SendScanedVoucher}>
            <Text style={GlobalStyles.buttonText}>Send bilag</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScanVoucherNavigation navigation={navigation} takePicture={takePicture}/>
    </View>
  )
}

export default ScanVoucherScreen;