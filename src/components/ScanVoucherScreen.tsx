import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RNCamera} from 'react-native-camera';
import {GlobalStyles} from '../style/GlobalStyles';
import {ScanVoucherNavigation} from '../style/navigation/ScanVoucherNavigation';


const ScanVoucherScreen = ({navigation}) =>{
  const dispatch = useDispatch();
  const [base64Image, setBase64Image] = useState('');
  const [showImage, setShowImage] = useState(false);
  const userToken = useSelector((state:any) => state.SignInReducer.token)
  let camera;

  useEffect(() => {
    console.log('showImmage ', showImage)
  }, [showImage])

  const takePicture = async () =>{
    if(camera){
      const options ={quality: 0.50, base64: true, forceUpOrientation: true, fixOrientation: true, pauseAfterCapture: true }
      const data = await camera.takePictureAsync(options); 
      setBase64Image(data.base64);
      setShowImage(true);
      console.log(data.base64)
    }
  }

  const closeModal = () => setShowImage(false)

  return(
    <View style={GlobalStyles.container} >
      <RNCamera captureAudio={false} style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}} ref={ref => (camera = ref)} type={RNCamera.Constants.Type.back}/>

      <Modal type='slide' transparent={false} visible={showImage}>
        <Image source={{uri: `data:image/jpg;base64,${base64Image}`}} style={{height: '90%', width: '100%'}}/>
        
        <View style={{width: '100%', height: '10%', flexDirection: 'row',  justifyContent: 'space-evenly', alignItems: 'center'}}>
          <TouchableOpacity style={GlobalStyles.button} onPress={closeModal}>
            <Text style={GlobalStyles.buttonText}>Kasser billede</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={GlobalStyles.button}>
            <Text style={GlobalStyles.buttonText}>Send bilag</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScanVoucherNavigation navigation={navigation} takePicture={takePicture}/>
    </View>
  )
}

export default ScanVoucherScreen;