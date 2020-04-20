import {combineReducers} from 'redux';
import SignInReducer from './SignInReducer';
import GetActiveVouchersReducer from './GetActiveVouchersReducer';
import GetActiveVoucherReducer from './GetActiveVoucherReducer';
import GetAllVouchersReducer from './GetAllVouchersReducer';
import SendNoteReducer from './SendNoteReducer';

const AllReducers = combineReducers({
  SignInReducer,
  GetActiveVouchersReducer,
  GetActiveVoucherReducer,
  SendNoteReducer, 
  GetAllVouchersReducer, 
})


export default AllReducers;