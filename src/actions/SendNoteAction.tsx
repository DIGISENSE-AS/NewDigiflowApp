export const SendNoteAction = (userToken:string, voucherToken:string, text:string)=> {
  return( async (dispatch) => {
    const response = await fetch('https://digisense-backend.azurewebsites.net/api/digiflow-app/addNoteToVoucher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userToken,
        voucherToken,
        text
      })
    })
    //Sconsole.log(await response.json())
    dispatch({
      type: 'SendNote', 
      payload: await response.json()
    })
  })
}