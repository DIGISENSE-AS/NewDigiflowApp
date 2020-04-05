const AuthenticateUserReducer = (state:any = {}, action:any ) => {
  switch (action.type){
    case 'Authenticated':
      return state = action.payload; 
    default:
      return state; 
  }
}

export default AuthenticateUserReducer