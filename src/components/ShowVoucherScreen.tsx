import React,{useEffect, useState} from 'react';
import {View, Text, Modal, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GetActiveVoucherAction} from '../actions/getActiveVoucherAction';
import Pdf from 'react-native-pdf';
import {GlobalStyles} from '../style/GlobalStyles';
import {ShowVoucherNavigation} from '../style/navigation/ShowVoucherNavigation';
import {Logo} from '../style/icons';

const ShowVoucherScreen = ({navigation}) => {
  const GetActiveVoucherReducer = useSelector((state:any) => state.GetActiveVoucherReducer);
  const userToken = useSelector((state:any) => state.SignInReducer);
  const [pdf, setPdf] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [voucherToken] =useState(navigation.state.params.voucherToken);
  const [voucherStatus] = useState(navigation.state.params.status)
  const dispatch = useDispatch();

  // gets data from db when page is loading
  useEffect(() => {
    dispatch(GetActiveVoucherAction(voucherToken))
  },[])

  // fills state with pdf data when get active voucher reducher is not empty
  useEffect(() =>{
    if(Object.keys(GetActiveVoucherReducer).length !== 0){
      setPdf(GetActiveVoucherReducer.data)
    }
  },[GetActiveVoucherReducer])

  // will navigate to notes screen and close modal
  const goToNotes = () => {
    setShowModal(false)
    navigation.navigate('ShowNotesScreen', voucherToken)
  }
  
  const closeModal = () => setShowModal(false)

  return(
    <View style={GlobalStyles.container}>
      <Pdf source={{uri: `data:application/pdf;base64,${pdf}`}} style={GlobalStyles.pdf}/>
      <ShowVoucherNavigation navigation={navigation} voucherToken={voucherToken} voucherStatus={voucherStatus} setShowModal={setShowModal}/>
      
      <Modal visible={showModal} transparent={true} animationType='slide' >
        <View style={GlobalStyles.modalBackground}>
          <View style={GlobalStyles.modalMenu}>

            <ScrollView>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Godkend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Frigiv </Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Videresend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Afvis</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton} onPress={goToNotes}>
                <Text style={GlobalStyles.modalButtonText}>Vis noter</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton} onPress={closeModal}>
                <Text style={GlobalStyles.modalButtonTextRed}>Luk menu</Text>
              </TouchableOpacity>

            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ShowVoucherScreen;