const GetAllCompaniesReducer = (state:any = [], action:any) => {
  switch(action.type){
    case 'AllCompanies':
      return state = action.payload
    default:
      return state
  }
}

export default GetAllCompaniesReducer