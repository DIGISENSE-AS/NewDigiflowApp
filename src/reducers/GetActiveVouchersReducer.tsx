const GetActiveVouchersReducer = (state:any = [], action:any) => {
  switch(action.type){
    case 'GetActiveVouchers':
      return state = action.payload
    default:
      return state
  }
}

export default GetActiveVouchersReducer;