import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet} from 'react-native';
import {GlobalStyles} from '../style/GlobalStyles';

const Login = () => {
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState();
  const [authenticationString, setAuthenticationString] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const styles = GlobalStyles;

  const changeRememberMe = (e:any) => rememberMe === false ? setRememberMe(true) : setRememberMe(false)

  const authenticate = () => {
    setAuthenticationString('authenticated')
  }

  return(
    <View>
      <View style={styles.top50}>
        <Text>{authenticationString}</Text>
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