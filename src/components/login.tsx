import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {autheticateUserAction} from '../actions/authenticateUserAction';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const userToken = useSelector((state:any) => state.AuthenticateUserReducer);
  console.log(userToken)
  const dispatch = useDispatch();

  useEffect(() => {
    if(userToken.length !== 0){
      if(userToken.status == 'ok'){console.log('is ok')}
      if(userToken.status === 'reject'){setErrorMessage(userToken.reason)}
    }
  })

  const changeRememberMe = (e:any) => rememberMe === false ? setRememberMe(true) : setRememberMe(false)

  const authenticate = async () => {
    await dispatch(autheticateUserAction(email, password));
    if(await userToken.status === 'ok'){console.log('can login')}
  }

  //console.log(userToken)
  return(
    <View>
      <View style={GlobalStyles.top50}>
        {/* <Text>{userToken.token}</Text> */}
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

export default Login