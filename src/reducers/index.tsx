import {combineReducers} from 'redux';
import AuthenticateUserReducer from './AuthenticateUserReducer';
import GetActiveVouchersReducer from './GetActiveVouchersReducer'

const AllReducers = combineReducers({
  AuthenticateUserReducer,
  GetActiveVouchersReducer,
  
})


export default AllReducers;