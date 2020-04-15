import React,{useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GetActiveVoucherAction} from '../actions/getActiveVoucherAction';
import Pdf from 'react-native-pdf';
import {GlobalStyles} from '../style/GlobalStyles'
import {ActiveVoucherNavigation} from '../style/Navigation'

const ShowActiveVoucher = ({navigation}) => {
  const GetActiveVoucherReducer = useSelector((state:any) => state.GetActiveVoucherReducer)
  const [pdf, setPdf] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetActiveVoucherAction(navigation.state.params.voucherToken))
  },[])

  useEffect(() =>{
    if(Object.keys(GetActiveVoucherReducer).length !== 0){
      setPdf(GetActiveVoucherReducer.data)
    }
  },[GetActiveVoucherReducer])

  return(
    <View>
      <Pdf source={{uri: `data:application/pdf;base64,${pdf}`}} style={GlobalStyles.pdf}/>
      <ActiveVoucherNavigation navigation={navigation}/>
    </View>
  )
}

export default ShowActiveVoucher;