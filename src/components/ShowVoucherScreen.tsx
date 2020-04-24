import React,{useEffect, useState} from 'react';
import {View, Text, Modal, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GetActiveVoucherAction} from '../actions/getActiveVoucherAction';
import Pdf from 'react-native-pdf';
import {GlobalStyles} from '../style/GlobalStyles';
import {ShowVoucherNavigation} from '../style/navigation/ShowVoucherNavigation';


const ShowVoucherScreen = ({navigation}) => {
  const GetActiveVoucherReducer = useSelector((state:any) => state.GetActiveVoucherReducer);
  const userToken = useSelector((state:any) => state.SignInReducer);
  const [pdf, setPdf] = useState("");
  const [showMenuModal, setMenuModal] = useState(false);
  const [showSendToModal, setSendToModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [voucherToken] =useState(navigation.state.params.voucherToken);
  const [voucherStatus] = useState(navigation.state.params.status)
  const [fakeUsers] = useState(['Gunner Reesen', 'Willie stroker', 'Ho Lee Phok', ])
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
    closeMenuModal();
    console.log(navigation.navigate('ShowNotesScreen', voucherToken))
  }
  
  const closeMenuModal = () => setMenuModal(false)

  const openSendToModal = () => {
    closeMenuModal()
    setSendToModal(true);
  }

  const closeSendToModal = () => setSendToModal(false)

  const goToRejectVoucher = () => {
    closeMenuModal();
    navigation.navigate('RejectVoucherScreen')
  }

  return(
    <View style={GlobalStyles.container}>
      <Pdf source={{uri: `data:application/pdf;base64,${pdf}`}} style={GlobalStyles.pdf}/>
      <ShowVoucherNavigation navigation={navigation} voucherToken={voucherToken} voucherStatus={voucherStatus} setMenuModal={setMenuModal}/>
      
      {/* modal will pop up when you press 'håndter bilaget */}
      <Modal visible={showMenuModal} transparent={true} animationType='slide' >
        <View style={GlobalStyles.modalBackgroundMenu}>
          <View style={GlobalStyles.modalMenu}>

            <ScrollView>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Godkend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Frigiv </Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton} onPress={openSendToModal}>
                <Text style={GlobalStyles.modalButtonText}>Videresend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton} onPress={goToRejectVoucher}>
                <Text style={GlobalStyles.modalButtonText}>Afvis</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton} onPress={goToNotes}>
                <Text style={GlobalStyles.modalButtonText}>Vis noter</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton} onPress={closeMenuModal}>
                <Text style={GlobalStyles.modalButtonTextRed}>Luk menu</Text>
              </TouchableOpacity>

            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* shows modal when you want to send voucher to another user */}
      <Modal visible={showSendToModal} transparent={true} animationType='slide' >
        <View style={GlobalStyles.modalBackgroundMenu}>
          <View style={GlobalStyles.modalMenu}>

            <ScrollView>

              {fakeUsers.map(fu => 
                <TouchableOpacity style={GlobalStyles.modalButton}>
                  <Text style={GlobalStyles.modalButtonText}>{fu}</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity style={GlobalStyles.modalButton} onPress={closeSendToModal}>
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