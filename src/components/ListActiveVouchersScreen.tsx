import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Modal} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {getActiveVouchersAction} from '../actions/getActiveVouchersAction';
import {SearchVouchersAction} from '../actions/SearchVouchersAction ';
import {DefaultNavigation} from '../style/navigation/DefaultNavigation';
import Spinner from 'react-native-spinkit';

const ListActiveVouchersScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [vouchers, setVouchers] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const userToken = useSelector((state:any) => state.SignInReducer);
  const vouchersReducer = useSelector((state:any) => state.GetActiveVouchersReducer);
  const SearchVouchersReducer = useSelector((state:any) => state.SearchVouchersReducer);
  const currentCompany = useSelector((state:any) => state.CurrentCompanyReducer)
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

  // works with searchVouchers function
  useEffect(() => {
    if(loading === true){
      const stripText = (string: string) => string.replace((/[^a-zA-Z 0-9]+/g), '').toLowerCase()
      const searchHits = [];

      if(searchValue.length !== 0 && searchValue !== ''){
        console.log('in search',SearchVouchersReducer)
        vouchersReducer.activeVouchers.map(voucher => {
          if(SearchVouchersReducer.includes(voucher.voucherToken)){searchHits.push(voucher)}
          for(let field in voucher ) {
            const value  = (voucher as any)[field];
            if(stripText(value.toString()).includes(stripText(searchValue))){searchHits.push(voucher)};
            if(stripText(value.toString()) === stripText(searchValue)){searchHits.push(voucher)};
            if('faktura'.includes(stripText(searchValue)) && stripText(value.toString()) === 'invoice'){searchHits.push(voucher)};
            if('kreditnota'.includes(stripText(searchValue)) && stripText(value.toString()) === 'creditnote'){searchHits.push(voucher)};
          }
        })
        
        setVouchers(searchHits)
      }else{
        setVouchers(vouchersReducer.activeVouchers)
      }
    }
    setLoading(false)

  }, [SearchVouchersReducer])

 // had the problem that state didnt change fast enugh
  // when i called the search voucher action in the same function as the reducer call
  // so for now this function will work in concordance with the use effect that only lstens to
  // search vouchers reducer change, i will find a better solution in the future
  const searchVouchers = () => {
    setLoading(true)
    dispatch(SearchVouchersAction(userToken.token, searchValue)) 
  }

  // will handle showing search results from searchbar
  const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp); 
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  // will convert number value into danish value
  const convertAmount = (totalAmount: any) => {
    return parseFloat(totalAmount.toFixed(2)).toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
       
        <TextInput placeholder={'Skriv her for at søge ...'} value={searchValue} style={GlobalStyles.textField}  onChangeText={(val) => setSearchValue(val)}/>
        <TouchableOpacity style={{...GlobalStyles.searchButton, backgroundColor: currentCompany.color}} onPress={searchVouchers}><Text style={GlobalStyles.buttonText}>Søg</Text></TouchableOpacity>

      </View>
      
      <ScrollView>
        <View style={GlobalStyles.voucherList}>
          {loading === true ?  <Spinner color={'#143D8D'}  type={"Wave"} /> : vouchers === 0 ?  <Text>Intet match</Text> :
            
          
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
        </View>
      </ScrollView>

      
      <DefaultNavigation navigation={navigation}/>

      
    </View>
  )
}

export default ListActiveVouchersScreen;