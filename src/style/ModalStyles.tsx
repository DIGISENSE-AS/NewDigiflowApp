import {StyleSheet} from 'react-native';

export const ModalStyles = StyleSheet.create({
  modal: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000000aa',
    padding: 30,
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center'
  },

  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    
  },

  header: {
    width: '100%',
    height: 30,
    backgroundColor: 'grey',
    marginBottom: 5
  },

  notesBox:{
    width: '100%',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },

  inputContainer:{
    width: '100%',
    minHeight: 20, 
    backgroundColor: 'grey',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around'
  },

  noteTextInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    backgroundColor: 'white'
  },

  addNoteButton:{
    backgroundColor: 'blue',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText:{
    color: 'white'
  }
})