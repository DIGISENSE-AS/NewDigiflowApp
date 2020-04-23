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
      
      <Modal visible={showModal} transparent={true}  >
        <View style={GlobalStyles.modalBackground}>
          <View style={GlobalStyles.modalMenu}>
            <View style={GlobalStyles.modalHeader}>
              <View style={GlobalStyles.modalLogoContainer}>
                <Logo logo={userToken.logoSVG}/>
              </View>
              
            </View>
            <View style={GlobalStyles.modalHeadline}>
              <Text style={GlobalStyles.modalHeadlineText}>Håndter bilag</Text>
            </View>
            <ScrollView>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Godkend bilag</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Frigiv bilag</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Vidresend bilag</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton}>
                <Text style={GlobalStyles.modalButtonText}>Afvis bilag</Text>
              </TouchableOpacity>

              <TouchableOpacity style={GlobalStyles.modalButton} onPress={goToNotes}>
                <Text style={GlobalStyles.modalButtonText}>Vis noter</Text>
              </TouchableOpacity>

            </ScrollView>

            <TouchableOpacity style={GlobalStyles.modalButton} onPress={closeModal}>
                <Text style={GlobalStyles.modalButtonText}>Luk håndter bilag</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ShowVoucherScreen;