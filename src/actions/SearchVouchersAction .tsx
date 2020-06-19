export const SearchVouchersAction = (userToken:string, searchValue:string) => {
  return(async (dispatch) => {
    const response = await fetch('https://digisense-backend.azurewebsites.net/api/digiflow-app/getSearchedVouchers', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userToken,
        searchValue
      })
    })
    console.log(0)
    dispatch({
      type: 'SearchVouchersAction',
      payload: await response.json()
    })
  })
}