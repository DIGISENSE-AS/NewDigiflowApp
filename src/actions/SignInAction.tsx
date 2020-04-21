
export const SignInAction = (username: string, password: string) =>{
  console.log('sign in action')
  return async (dispatch: any) => {
    const response = await fetch('https://digisense-backend.azurewebsites.net/api/digiflow-app/getUserAuthentication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    })

    console.log(response)
    
    dispatch({
      type: 'SignIn',
      payload: await response.json()
    })
  }
}

export const SignOutAction = () => {
  return({
    type: 'SignOut',
  })
}