export const getActiveVouchersAction = (userToken:any) =>{
  return( async (dispatch) => {
    const response = await fetch('https://digisense-backend.azurewebsites.net/api/digiflow-app/getActiveVouchers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({userToken})
    })

    dispatch({
      type: 'GetActiveVouchers', 
      payload: await response.json()
    })
  })
}