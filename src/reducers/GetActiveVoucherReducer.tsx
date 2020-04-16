const GetActiveVoucherReducer = (state:any = {}, action:any) => {
  switch(action.type){
    case 'GetActiveVoucher':
      return state = action.payload;
    default:
      return state;
  }
} 

export default GetActiveVoucherReducer;