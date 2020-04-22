const SendScanedVoucherReducer = (state:any = null, action:any) =>{
  switch(action.type){
    case 'SendScanedVoucher':
      return state = action.payload
    default: 
      return state  
  }
}

export default SendScanedVoucherReducer;