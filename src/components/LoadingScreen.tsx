import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {View} from 'react-native'
import {GlobalStyles} from '../style/GlobalStyles';
import {Logo} from '../style/icons';
import Spinner from 'react-native-spinkit';

const LoadingScreen = ({navigation}) => {
  // gets data from authenticateUserReducer
  const userToken = useSelector((state:any) => state.SignInReducer)

  // will wait for 3 seconds before navigating to main screen
  useEffect(() =>{
    setTimeout(() => {
      navigation.navigate('ListActiveVouchers')
    }, 3000)
  },[])

  // sets spinner color based on what data is in user token
  const spinnerColor = () => {
    if(userToken.length === 0){return '#000000'}
    if(userToken.logoSvg !== 0){return userToken.logoSVG}
    if(userToken.logoSVG === ''){return '#143D8D'}
  }


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

export default LoadingScreen;