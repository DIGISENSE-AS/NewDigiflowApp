import React from 'react'
import {useSelector} from 'react-redux';
import {View} from 'react-native'
import {GlobalStyles} from '../style/GlobalStyles';
import {Logo} from '../style/icons';
import Spinner from 'react-native-spinkit';

const AuthLoadingScreen = () => {
  // gets data from authenticateUserReducer
  const userToken = useSelector((state:any) => state.AuthenticateUserReducer)

  const spinnerColor = () => {
    if(userToken.length === 0){return '#000000'}
    if(userToken.spinnerColor){return userToken.spinnerColor}
    if(userToken.logoSVG === ''){return '#143D8D'}
  }

  const showLogo = () => {if(userToken.length !== 0){return userToken.logoSVG}}  

  return(
    <>
      <View style={GlobalStyles.top50}>
        <Logo logo={showLogo}/>
      </View>
      <View style={GlobalStyles.bottom40}>
        <Spinner color={spinnerColor()}  type={"Wave"} />
      </View>
    </>
  )

}

export default AuthLoadingScreen;