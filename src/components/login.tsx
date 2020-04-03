import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {autheticateUserAction} from '../actions/authenticateUserAction';

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const userToken = useSelector((state:any) => state.AuthenticateUserReducer);

  const dispatch = useDispatch();
  const styles = GlobalStyles;

  const changeRememberMe = (e:any) => rememberMe === false ? setRememberMe(true) : setRememberMe(false)

  const authenticate = () => {
    dispatch(autheticateUserAction(email, password));
  }

  return(
    <View>
      <View style={styles.top50}>
        <Text>{userToken}</Text>
        <Text>Digiflow</Text>
      </View>
      <View style={styles.bottom40}>
        <TextInput style={styles.textInput} placeholder="e-mail" value={email} onChange={(e:any) => setEmail(e.target.value)}></TextInput>
        <TextInput style={styles.textInput} placeholder='adgangskode' value={password} onChange={(e:any) => setPassword(e.target.value) }></TextInput>
        <View style={styles.buttonContainer}>

          <CheckBox value={rememberMe} onChange={(e: any)=> changeRememberMe(e)}></CheckBox>
          
          <TouchableOpacity style={styles.button} onPress={e => authenticate()}><Text style={styles.buttonText}>Log ind</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login