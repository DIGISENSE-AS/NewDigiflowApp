import React, {useState, useEffect} from 'react'
import {View, Modal, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GetActiveVoucherAction} from '../actions/getActiveVoucherAction';
import ShowActiveVoucher from './ShowActiveVoucher';


const ShowNotesScreen = ({voucherToken}) => {
  const notes = useSelector((state:any) => state.GetActiveVoucherReducer.notes);
  const showVoucher = useSelector((state:any) => state.ShowActiveVoucherNotesReducer)
  const [messageText, setMessageText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetActiveVoucherAction(voucherToken))
    console.log(showVoucher)
  },[])  

  const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp); 
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  return(
    <View >
      <View >
        <ScrollView>
        {typeof notes === 'undefined' ? <Text>Henter Noter</Text> :  notes.map((note:any) => 
          <View >
            <Text>{`${note.userName} - ${convertTimestamp(parseInt(note.dateAndTime))}`}</Text>
            <Text>{note.note}</Text>
          </View>
        )} 
        </ScrollView>
        <View >
          <TextInput  value={messageText} onChangeText={val => setMessageText(val)}></TextInput>
          <TouchableOpacity ><Text >Tilføj Note</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ShowNotesScreen