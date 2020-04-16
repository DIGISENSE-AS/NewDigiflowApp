export const GetActiveVoucherAction = (voucherToken:string ) => {
  return(async (dispatch) => {
    const response = await fetch(`https://digisense-backend.azurewebsites.net/api/digiflow-app/getVoucherPdf/${voucherToken}`);

    dispatch({
      type: 'GetActiveVoucher',
      payload: await response.json()
    })
  })
}