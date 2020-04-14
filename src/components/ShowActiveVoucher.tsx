import React,{useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GetActiveVoucherAction} from '../actions/getActiveVoucherAction';

const ShowActiveVoucher = ({navigation}) => {
  const GetActiveVoucherReducer = useSelector((state:any) => state.GetActiveVoucherReducer)
  const [pdf, setPdf] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetActiveVoucherAction(navigation.state.params.voucherToken))
  },[])

  useEffect(() =>{
    if(GetActiveVoucherReducer.length !== 0){
      setPdf(GetActiveVoucherReducer.data)
    }
    console.log(pdf)
  },[GetActiveVoucherReducer])

  return(
    <View>
      <Text>Diller</Text>
    </View>
  )
}

export default ShowActiveVoucher;