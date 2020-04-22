import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {ShowNotesNavigation} from '../style/navigation/ShowNotesNavigation';
import {SendNoteAction} from '../actions/SendNoteAction';

const ShowNotesScreen = ({navigation}) => {
  const GetActiveVoucherReducer = useSelector((state:any) => state.GetActiveVoucherReducer);
  const SendNotesReducer = useSelector((state:any) => state.SendNoteReducer);
  const userToken = useSelector((state:any) => state.SignInReducer.token);
  const [messageText, setMessageText] = useState('');
  const [notes, setNotes] = useState([]);
  const [voucherToken, setVoucherToken] = useState('');
  const dispatch = useDispatch();

  // sets states with data from reducers when getActiveVoucherReducer has loaded
  useEffect(() => {
    setVoucherToken(navigation.state.params)
    setNotes(GetActiveVoucherReducer.notes)
  },[GetActiveVoucherReducer])

  // fils states with data if there is any notes connected to voucher
  useEffect(() =>{
    if(SendNotesReducer.length !== 0){
      setNotes(SendNotesReducer.notes)
    }
  },[SendNotesReducer])

  // sets c# timestamp to danish date
  const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp); 
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  // updates notes when a new note has been written and sent
  const updateNotes = () =>{
    dispatch(SendNoteAction(userToken, voucherToken, messageText));
  }

  return(
    <View style={GlobalStyles.container}>
      <ScrollView>
      {typeof notes === 'undefined' || notes.length === 0  ? <Text>Henter Noter</Text> :  notes.map((note:any) => 
        <View style={GlobalStyles.messageBox}>
          <Text style={GlobalStyles.textHeader}>{`${note.userName} - ${convertTimestamp(parseInt(note.dateAndTime))}`}</Text>
          <Text>{note.note}</Text>
        </View>
      )} 
      </ScrollView>
      <View style={GlobalStyles.textInputContainer}>
        <TextInput style={GlobalStyles.notesTextInput} value={messageText} onChangeText={val => setMessageText(val)}></TextInput>
        <TouchableOpacity style={GlobalStyles.button} onPress={updateNotes}><Text style={GlobalStyles.buttonText} >Tilføj Note</Text></TouchableOpacity>
      </View>
      <ShowNotesNavigation navigation={navigation}/>
    </View>
  )
}

export default ShowNotesScreen