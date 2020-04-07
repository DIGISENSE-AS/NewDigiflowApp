
export const autheticateUserAction = (username: string, password: string) =>{
  return async (dispatch: any) => {
    const response = await fetch('https://digisense-backend.azurewebsites.net/api/digiflow-app/getUserAuthentication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    })

    dispatch({
      type: 'Authenticated',
      payload: await response.json()
    })
  }
}