const SignInReducer = (state:any = {}, action:any ) => {
  switch (action.type){
    case 'SignIn':
      console.log('sign in reducer')
      return state = action.payload;
    case 'SignOut':
      return state = {}
    default:
      return state; 
  }
}

export default SignInReducer;