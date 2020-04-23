import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Modal} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {getActiveVouchersAction} from '../actions/getActiveVouchersAction';
import {ListActiveVouchersNavigation} from '../style/navigation/ListActiveVouchersNavigation';

const ListActiveVouchersScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [vouchers, setVouchers] = useState([]);
  const [showModal, setShowModal] = useState(true)
  const userToken = useSelector((state:any) => state.SignInReducer);
  const vouchersReducer = useSelector((state:any) => state.GetActiveVouchersReducer);

  const dispatch = useDispatch();
  
  // will get active vouchers from active vouchers action
  useEffect(() => {
    dispatch(getActiveVouchersAction(userToken.token));
  }, [])

  // if there are vouchers in get active vouchers reducer 
  // it will put them in vouchers state
  useEffect(() => {
    if(vouchersReducer.length !== 0) {setVouchers(vouchersReducer.activeVouchers)}
  },[vouchersReducer])

  // will handle showing search results from searchbar
  const searchVouchers = (val: any ) => {
    setSearchValue(val)

    const stripText = (string: string) => string.replace((/[^a-zA-Z 0-9]+/g), '').toLowerCase()
    const stripedSerachValue = stripText(val)
    if(val !== '' && val!== ' '){
      console.log(val !== '' && val !== ' ')
      const list = vouchers.filter(voucher => {
        for(let field in voucher ) {
          const value  = (voucher as any)[field];
          if(stripText(value.toString()).includes(stripedSerachValue)) return true;
          if(stripText(value.toString()) === stripText(searchValue)) return true;
          if('faktura'.includes(stripText(searchValue)) && stripText(value.toString()) === 'invoice') return true;
          if('kreditnota'.includes(stripText(searchValue)) && stripText(value.toString()) === 'creditnote') return true;
        }
        return false
      })
      setVouchers(list);
    }else {
      setVouchers(vouchersReducer.activeVouchers);
    }
  }

  // will handle showing search results from searchbar
  const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp); 
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  // will convert number value into danish value
  const convertAmount = (totalAmount: any) => {
    return totalAmount.toFixed(2).replace('.', ',');
    // code below should work but does not, dont know why
    // return parseFloat(totalAmount.toFixed(2)).toLocaleString('da-DK');
  }

  // will sanitize vendor name 
  const convertVendorName = (vendorName: string) => {
    let name: string = vendorName
    if(name.includes('&amp;')){name = name.replace('&amp;', '&')}
    return name
  }


  return(
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.searchContainer}  >
       
        <TextInput placeholder={'Skriv her for at søge ...'} value={searchValue} style={GlobalStyles.textField}  onChangeText={(val) => searchVouchers(val)}/>
        
      </View>
      
      <ScrollView>
        {vouchers === 0 ?  <Text>Intet match</Text> :
          
        
          vouchers.map((voucher: any )  => (
    
            <TouchableOpacity style={GlobalStyles.listBox} onPress={() => navigation.navigate('ShowVoucher', voucher, true)} key={voucher.voucherToken}>
              <View style={GlobalStyles.listTextBox}  >
                <Text style={GlobalStyles.listHeader}>{convertVendorName(voucher.vendorName)}</Text>
                <Text style={GlobalStyles.listText}>{voucher.appendixNo}</Text>
                <Text style={GlobalStyles.listText}>{voucher.type === 'INVOICE' ? 'Faktura' : 'Kreditnota'}</Text>
                <Text style={GlobalStyles.listText}>{convertTimestamp(voucher.issueDate)}</Text>
                <Text style={GlobalStyles.listText}>{`${voucher.currency} ${convertAmount(voucher.totalAmount)}`}</Text>

              </View> 
              {/* {showStatus(voucher.status)} */}
            </TouchableOpacity>
          ))  
        }
      </ScrollView>

      
      <ListActiveVouchersNavigation navigation={navigation}/>

      
    </View>
  )
}

export default ListActiveVouchersScreen;