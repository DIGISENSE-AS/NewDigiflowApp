import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GlobalStyles} from '../style/GlobalStyles';
import {GetAllVouchersAction} from '../actions/GetAllVouchersAction';
import {DefaultNavigation} from '../style/navigation/DefaultNavigation';
import {SearchVouchersAction} from '../actions/SearchVouchersAction ';
import Spinner from 'react-native-spinkit';

const ListAllVouchersScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(false);
  const userToken = useSelector((state:any) => state.SignInReducer);
  const vouchersReducer = useSelector((state:any) => state.GetAllVouchersReducer);
  const SearchVouchersReducer = useSelector((state:any) => state.SearchVouchersReducer);
  const currentCompany = useSelector((state:any) =>state.CurrentCompanyReducer);
  const styles = GlobalStyles;
  const dispatch = useDispatch();
  
  // will get active vouchers from all vouchers action
  useEffect(() => {
    dispatch(GetAllVouchersAction(userToken.token));
  }, [])

  // if there are vouchers in get all vouchers reducer 
  // it will put them in vouchers state
  useEffect(() => {
    if(vouchersReducer.length !== 0) {setVouchers(vouchersReducer)}
  },[vouchersReducer])


  // works with searchVouchers function
  useEffect(() => {
    if(loading === true){
      const stripText = (string: string) => string.replace((/[^a-zA-Z 0-9]+/g), '').toLowerCase()
      const searchHits = [];

      if(searchValue.length !== 0 && searchValue !== ''){
        console.log('in search',SearchVouchersReducer)
        vouchersReducer.map(voucher => {
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
        setVouchers(vouchersReducer)
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

  const showStatus = (status) =>{
    if(status === "INPROC"){return(<Text style={GlobalStyles.moveLeft}>Igang</Text>)}
    if(status === "DONE"){return(<Text style={GlobalStyles.moveLeft}>Afviklet</Text>)}
  }


  return(
    <View style={styles.container}>
      <View style={styles.searchContainer}  >
       
        <TextInput placeholder={'Skriv her for at søge ...'} value={searchValue} style={styles.textField}  onChangeText={(val) => setSearchValue(val)}/>
        <TouchableOpacity style={{...styles.searchButton, backgroundColor: currentCompany.color}} onPress={searchVouchers}><Text style={styles.buttonText}>Søg</Text></TouchableOpacity>
        
      </View>
      
      <ScrollView >
        <View style={styles.voucherList}>
        {loading === true ?  <Spinner color={'#143D8D'}  type={"Wave"} /> : vouchers.length === 0  ?  <Text>Intet match</Text> :
        
          vouchers.map((voucher: any )  => (
    
            <TouchableOpacity style={styles.listBox} onPress={() => navigation.navigate('ShowVoucher', voucher)} key={voucher.voucherToken}>
              <View style={styles.listTextBox}  >
                <Text style={styles.listHeader}>{convertVendorName(voucher.vendorName)}</Text>
                <Text style={styles.listText}>{voucher.appendixNo}</Text>
                <Text style={styles.listText}>{voucher.type === 'INVOICE' ? 'Faktura' : 'Kreditnota'}</Text>
                <Text style={styles.listText}>{convertTimestamp(voucher.issueDate)}</Text>
                <Text style={styles.listText}>{`${voucher.currency} ${convertAmount(voucher.totalAmount)}`}</Text>

              </View> 
              {showStatus(voucher.status)}
            </TouchableOpacity>
          ))  
        }
        </View>
      </ScrollView>
      <DefaultNavigation navigation={navigation}/>
    </View>
  )
}

export default ListAllVouchersScreen;