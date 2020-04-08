import {combineReducers} from 'redux';
import SignInReducer from './SignInReducer';
import GetActiveVouchersReducer from './GetActiveVouchersReducer'

const AllReducers = combineReducers({
  SignInReducer,
  GetActiveVouchersReducer,
  
})


export default AllReducers;