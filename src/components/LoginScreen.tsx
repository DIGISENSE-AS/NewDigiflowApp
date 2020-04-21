import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {SignInAction} from '../actions/SignInAction';

const LoginScreen = ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const userToken = useSelector((state:any) => state.SignInReducer);
  const dispatch = useDispatch();

  // will fire when user token get updated by autheticate function
  useEffect(() => {
    if(userToken.length !== 0){
      if(userToken.status == 'ok'){navigation.navigate('LoadingScreen')}
      if(userToken.status === 'reject'){setErrorMessage(userToken.reason)}
    }
  }, [userToken])

  const changeRememberMe = (e:any) => rememberMe === false ? setRememberMe(true) : setRememberMe(false)

  // when login button is pressed then user token will update
  const authenticate = () => {
    dispatch(SignInAction(email, password))
  };

  return(
    <View>
      <View style={GlobalStyles.top50}>
        <Text>Digiflow</Text>
      </View>
      <View style={GlobalStyles.bottom40}>
        <Text style={GlobalStyles.errorMessage}>{errorMessage}</Text>
        <TextInput style={GlobalStyles.textInput} placeholder="e-mail" value={email} onChangeText={v => setEmail(v)}/>
        <TextInput style={GlobalStyles.textInput} placeholder='adgangskode' value={password} onChangeText={v => setPassword(v) }></TextInput>
        <View style={GlobalStyles.buttonContainer}>

          <CheckBox value={rememberMe} onChange={(e: any)=> changeRememberMe(e)}></CheckBox>
          
          <TouchableOpacity style={GlobalStyles.button} onPress={e => authenticate()}><Text style={GlobalStyles.buttonText}>Log ind</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen