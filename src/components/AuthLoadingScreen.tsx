import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {View} from 'react-native'
import {GlobalStyles} from '../style/GlobalStyles';
import {Logo} from '../style/icons';
import Spinner from 'react-native-spinkit';

const AuthLoadingScreen = ({navigation}) => {
  // gets data from authenticateUserReducer
  const userToken = useSelector((state:any) => state.AuthenticateUserReducer)

  useEffect(() =>{
    setTimeout(() => {
      navigation.navigate('ListActiveVouchers')
    })
  })

  // sets spinner color based on what data is in user token
  const spinnerColor = () => {
    if(userToken.length === 0){return '#000000'}
    if(userToken.logoSvg !== 0){return userToken.logoSVG}
    if(userToken.logoSVG === ''){return '#143D8D'}
  }

  const showLogo = () => {if(userToken.length !== 0){return userToken.logoSVG}}  

  return(
    <>
      <View style={GlobalStyles.top50}>
        <Logo logo={userToken.logoSVG}/>
      </View>
      <View style={GlobalStyles.bottom40}>
        <Spinner color={spinnerColor()}  type={"Wave"} />
      </View>
    </>
  )

}

export default AuthLoadingScreen;