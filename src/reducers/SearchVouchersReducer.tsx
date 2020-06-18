const SearchVouchersReducer = (state:any = [], action:any) => {
  switch(action.type){
    case 'SearchVouchersAction':
      return state = action.payload.invoices
    default:
      return state = []
  }
}

export default SearchVouchersReducer;