const SendNoteReducer = (state:any = [], action:any) =>{
  switch(action.type){
    case 'SendNote':
      return state = action.payload
    default:
      return state
  }
}

export default SendNoteReducer;