import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {getActiveVouchersAction} from '../actions/getActiveVouchersAction';
import {ListActiveVouchersNavigation} from '../style/navigation/ListActiveVouchersNavigation';

const ListActiveVouchersScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [vouchers, setVouchers] = useState([]);
  const userToken = useSelector((state:any) => state.SignInReducer);
  const vouchersReducer = useSelector((state:any) => state.GetActiveVouchersReducer);
  const styles = GlobalStyles;
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
    <View style={styles.container}>
      <View style={styles.searchContainer}  >
       
        <TextInput placeholder={'Skriv her for at søge ...'} value={searchValue} style={styles.textField}  onChangeText={(val) => searchVouchers(val)}/>
        
      </View>
      
      <ScrollView>
        {vouchers === 0 ?  <Text>Intet match</Text> :
          
        
          vouchers.map((voucher: any )  => (
    
            <TouchableOpacity style={styles.listBox} onPress={() => navigation.navigate('ShowVoucher', voucher)} key={voucher.voucherToken}>
              <View style={styles.listTextBox}  >
                <Text style={styles.listHeader}>{convertVendorName(voucher.vendorName)}</Text>
                <Text style={styles.listText}>{voucher.appendixNo}</Text>
                <Text style={styles.listText}>{voucher.type === 'INVOICE' ? 'Faktura' : 'Kreditnota'}</Text>
                <Text style={styles.listText}>{convertTimestamp(voucher.issueDate)}</Text>
                <Text style={styles.listText}>{`${voucher.currency} ${convertAmount(voucher.totalAmount)}`}</Text>

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