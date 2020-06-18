const CurrentCompanyReducer = (state:any = '', action:any) =>{
  switch(action.type){
    case 'CurrentCompany':
      return state = action.payload
    default:
      return state
  }
}

export default CurrentCompanyReducer;