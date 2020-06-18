import {combineReducers} from 'redux';
import SignInReducer from './SignInReducer';
import GetActiveVouchersReducer from './GetActiveVouchersReducer';
import GetActiveVoucherReducer from './GetActiveVoucherReducer';
import GetAllVouchersReducer from './GetAllVouchersReducer';
import SendNoteReducer from './SendNoteReducer';
import SendScanedVoucherReducer from './SendScanedVoucherReducer';
import GetAllCompaniesReducer from './GetAllCompaniesReducer';
import CurrentCompanyReducer from './CurrentCompanyReducer';
import SearchVouchersReducer from './SearchVouchersReducer';

const AllReducers = combineReducers({
  SignInReducer,
  GetActiveVouchersReducer,
  GetActiveVoucherReducer,
  SendNoteReducer, 
  GetAllVouchersReducer,
  SendScanedVoucherReducer,
  GetAllCompaniesReducer,
  CurrentCompanyReducer,
  SearchVouchersReducer,
})


export default AllReducers;