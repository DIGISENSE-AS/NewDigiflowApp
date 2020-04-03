
export const autheticateUserAction = (username: string, password: string) =>{
  console.log('got request')
  return async (dispatch:any) => {
    const response = await fetch('http://192.168.1.142/api/digiflowApp/getUserAuthentication', {
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
  // 
}