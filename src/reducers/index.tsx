import {combineReducers} from 'redux';
import SignInReducer from './SignInReducer';
import GetActiveVouchersReducer from './GetActiveVouchersReducer';
import GetActiveVoucherReducer from './GetActiveVoucherReducer';
import GetAllVouchersReducer from './GetAllVouchersReducer';
import SendNoteReducer from './SendNoteReducer';
import SendScanedVoucherReducer from './SendScanedVoucherReducer';

const AllReducers = combineReducers({
  SignInReducer,
  GetActiveVouchersReducer,
  GetActiveVoucherReducer,
  SendNoteReducer, 
  GetAllVouchersReducer,
  SendScanedVoucherReducer,
})


export default AllReducers;