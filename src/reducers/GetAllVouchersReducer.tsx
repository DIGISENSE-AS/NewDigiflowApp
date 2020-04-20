const GetAllVouchersReducer = (state:any = [], action:any) =>{
  switch(action.type){
    case 'GetAllVoucher':
      return state = action.payload.invoices;
    default: 
      return state;
  }
} 

export default GetAllVouchersReducer;