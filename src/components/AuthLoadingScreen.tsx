import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {View} from 'react-native'
import {GlobalStyles} from '../style/GlobalStyles';
import {autheticateUserAction} from '../actions/authenticateUserAction';
import {Logo} from '../style/icons';
import Spinner from 'react-native-spinkit';

const AuthLoadingScreen = () => {
  // gets data from authenticateUserReducer
  const userToken = useSelector((state:any) => state.AuthenticateUserReducer);
  const [color, setColor] = useState('#000000');
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(autheticateUserAction('demo@digisense.dk', 'demo'))
  },[])

  return(
    <>
      <View style={GlobalStyles.top50}>
        <Logo logo={userToken.length !== 0 ? userToken.logo : ''}/>
      </View>
      <View style={GlobalStyles.bottom40}>
        <Spinner  type={"Wave"} />
      </View>
    </>
  )

}

export default AuthLoadingScreen;