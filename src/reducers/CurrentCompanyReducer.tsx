const CurrentCompanyReducer = (state:any = null, action:any) =>{
  switch(action.type){
    case 'CurrentCompany':
      return state = action.payload
    default:
      return state
  }
}

export default CurrentCompanyReducer;