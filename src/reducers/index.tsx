import {combineReducers} from 'redux';
import SignInReducer from './SignInReducer';
import GetActiveVouchersReducer from './GetActiveVouchersReducer';
import GetActiveVoucherReducer from './GetActiveVoucherReducer';

const AllReducers = combineReducers({
  SignInReducer,
  GetActiveVouchersReducer,
  GetActiveVoucherReducer,

})


export default AllReducers;