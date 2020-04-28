import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {View} from 'react-native'
import {GlobalStyles} from '../style/GlobalStyles';
import {Logo} from '../style/icons';
import Spinner from 'react-native-spinkit';
import {GetAllCompaniesAction} from '../actions/GetAllCompaniesAction';
import {CurrentComapanyAction} from '../actions/CurrentCompanyAction';

const LoadingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // gets data from authenticateUserReducer
  const userToken = useSelector((state:any) => state.SignInReducer);
  const allCompanies = useSelector((state:any) => state.GetAllCompaniesReducer);
  const currentCompany = useSelector((state:any) => state.currentCompanyReducer);

  // will wait for 3 seconds before navigating to main screen
  useEffect(() =>{
    dispatch(GetAllCompaniesAction(userToken.token))
  },[])

  useEffect(() =>{
    if(allCompanies.length !== 0){
      dispatch(CurrentComapanyAction(allCompanies[0]))
    }
  },[allCompanies])

  useEffect(() =>  {
    if(currentCompany !== null){
      setTimeout(() => {
        navigation.navigate('ListActiveVouchers')
      }, 1000)
    }
  }, [])

  // sets spinner color based on what data is in user token
  const spinnerColor = () => {
    if(userToken.length === 0){return '#000000'}
    if(userToken.logoSvg !== 0){return userToken.logoSVG}
    if(userToken.logoSVG === ''){return '#143D8D'}
  }

  return(
    <>
      <View style={GlobalStyles.top50}>
        <View style={GlobalStyles.logoContainer}>
          <Logo logo={userToken.logoSVG}/>
        </View>
        
      </View>
      <View style={GlobalStyles.bottom40}>
        <Spinner color={spinnerColor()}  type={"Wave"} />
      </View>
    </>
  )
}

export default LoadingScreen;