import {StyleSheet} from 'react-native';
import { ModalStyles } from './ModalStyles';

export const GlobalStyles = StyleSheet.create({
  
  top50: {
    height: '50%',
    width: '100%',  
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoContainer:{
    width: '60%',
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
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  },

  errorMessage: {
    width: '100%',
    padding: 5,
    textAlign: 'center',
    marginBottom: 10,
    color: 'red'
  },

  container:{
   flex: 1
  },

  textField: {
    color: 'black',
    width: '100%',
  },

  listBox: {
    minHeight: 100,
    backgroundColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listTextBox:{
    justifyContent: 'center',
    height: 60,
    padding: 5
  },

  listHeader:{
    fontSize: 15,
    color: '#333'
  },

  listText:{
    fontSize: 10,
    color: '#333',
  },

  moveLeft: {
    margin: 7
  },

  searchContainer : {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  noMatch: {
    marginTop: 30,
    width: '100%', 
    textAlign: 'center',
    color: '#808080',
    fontSize: 20
  },

  pdf:{
    height: '88%',
    width: '100%',
    padding: 5, 
  },



  messageBox:{
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 10
  },

  textHeader:{
    fontWeight: 'bold'
  },

  textInputContainer:{
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'grey'
  },

  notesTextInput:{
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  }, 

  //handles styling for reject voucher
  rejectContainer: {
    height: '88%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    padding:20,
  },

  rejectText:{
    marginBottom:20,
  },

  rejectTextBox:{
    borderWidth: 1,
    borderColor: '#131C8D',
    borderRadius: 15,
    width: '100%',
    marginBottom: 20
  },

  rejectTextBoxText: {color: 'white'},

  rejectButton:{
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#131C8D',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row', 
    justifyContent: 'center'
  },

  // will handle the modal action menu
  modalBackgroundMenu:{
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },

  modalBackgroundDialouge:{
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalMenu:{
    minHeight: '10%',
    maxHeight: '40%',
    width: '100%', 
    backgroundColor:'white',
  },

  modalButton: {
    width: '100%', 
    padding: 10,
    backgroundColor: '#efefef',
    marginBottom: 4,
    alignItems: 'center',
  },

  modalButtonText:{fontWeight: 'bold', color: '#131C8D'},
  modalButtonTextRed:{fontWeight: 'bold', color: 'red'}
})