import {StyleSheet} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  
  top50: {
    height: '50%',
    width: '100%',  
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottom40: {
    height: '40%',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center'
  },

  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 6,
    height: 40,
    width: '60%',
    color: 'black'
  },

  buttonContainer:{
    width: '60%', 
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button: {
    backgroundColor: '#131C8D',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
  },

  buttonText: {
    color: 'white'
  },
})