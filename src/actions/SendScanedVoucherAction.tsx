export const SendScanedVoucherAction = (userToken:string, base64Jpg:string)=> {
  return( async (dispatch) => {
    const response = await fetch('https://digisense-backend.azurewebsites.net/api/digiflow-app/sendScanedVoucher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userToken,
        base64Jpg
      })
    })
    
    dispatch({
      type: 'SendScanedVoucher', 
      payload: await response.json()
    })
  })
}