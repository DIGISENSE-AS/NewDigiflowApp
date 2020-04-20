export const GetAllVouchersAction = (voucherToken:string ) => {
  return(async (dispatch) => {
    const response = await fetch(`https://digisense-backend.azurewebsites.net/api/digiflow-app/getAllVouchers/${voucherToken}`);

    dispatch({
      type: 'GetAllVoucher',
      payload: await response.json()
    })
  })
}