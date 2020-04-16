import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {ShowNotesNavigation} from '../style/navigation/ShowNotesNavigation';

const ShowNotesScreen = ({navigation}) => {
  const notes = useSelector((state:any) => state.GetActiveVoucherReducer.notes)
  const [messageText, setMessageText] = useState('');  

  const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp); 
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
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
          <TouchableOpacity style={GlobalStyles.button} ><Text style={GlobalStyles.buttonText} >Tilføj Note</Text></TouchableOpacity>
        </View>
        <ShowNotesNavigation navigation={navigation}/>
      </View>
      
  )
}

export default ShowNotesScreen