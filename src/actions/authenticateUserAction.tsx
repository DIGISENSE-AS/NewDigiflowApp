
export const autheticateUserAction = (username: string, password: string) =>{
  console.log(username)
  return async (dispatch:any) => {
    const response = await fetch('https://digisense-backend.azurewebsites.net/api/digiflowApp/getUserAuthentication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      })
    })

    dispatch({
      type: 'Authenticated', 
      payload: await response.json()
    })
  }
}