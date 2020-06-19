const SearchVouchersReducer = (state:any, action:any) => {
  switch(action.type){
    case 'SearchVouchersAction':
      console.log('1')
      return state = action.payload.invoices;
    default:
      return state = []
  }
}

export default SearchVouchersReducer;