import React,{useEffect, useState} from 'react';
import {View, Text, BottomNavigation} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GetActiveVoucherAction} from '../actions/getActiveVoucherAction';
import Pdf from 'react-native-pdf';
import {GlobalStyles} from '../style/GlobalStyles'
import {ActiveVoucherNavigation} from '../style/Navigation'

const ShowActiveVoucher = ({navigation}) => {
  const GetActiveVoucherReducer = useSelector((state:any) => state.GetActiveVoucherReducer)
  const [pdf, setPdf] = useState("")
  const [voucherToken] =useState(navigation.state.params.voucherToken)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetActiveVoucherAction(voucherToken))
  },[])

  useEffect(() =>{
    if(Object.keys(GetActiveVoucherReducer).length !== 0){
      setPdf(GetActiveVoucherReducer.data)
    }
  },[GetActiveVoucherReducer])

  return(
    <View style={GlobalStyles.container}>
      <Pdf source={{uri: `data:application/pdf;base64,${pdf}`}} style={GlobalStyles.pdf}/>
      <ActiveVoucherNavigation navigation={navigation}/>
    </View>
  )
}

export default ShowActiveVoucher;