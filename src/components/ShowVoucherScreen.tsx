import React,{useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GetActiveVoucherAction} from '../actions/getActiveVoucherAction';
import Pdf from 'react-native-pdf';
import {GlobalStyles} from '../style/GlobalStyles'
import {ShowVoucherNavigation} from '../style/navigation/ShowVoucherNavigation'

const ShowVoucherScreen = ({navigation}) => {
  const GetActiveVoucherReducer = useSelector((state:any) => state.GetActiveVoucherReducer)
  const [pdf, setPdf] = useState("")
  const [voucherToken] =useState(navigation.state.params.voucherToken)
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

  return(
    <View style={GlobalStyles.container}>
      <Pdf source={{uri: `data:application/pdf;base64,${pdf}`}} style={GlobalStyles.pdf}/>
      <ShowVoucherNavigation navigation={navigation} voucherToken={voucherToken}/>
    </View>
  )
}

export default ShowVoucherScreen;