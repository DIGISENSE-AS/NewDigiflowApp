import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {GlobalStyles} from '../style/GlobalStyles';
import {DefaultNavigation} from '../style/navigation/DefaultNavigation';
import {useSelector, useDispatch} from 'react-redux'
import {CurrentComapanyAction} from '../actions/CurrentCompanyAction';

const ChangeCompanyScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [initialCompany, setInitialCompany] = useState()
  const allCompanies = useSelector((state:any) => state.GetAllCompaniesReducer);
  const CurrentCompany = useSelector((state:any) => state.CurrentCompanyReducer);

  const changeCompany = (company) =>{
    console.log('initial', initialCompany)
    console.log('current', CurrentCompany)
    

    if(company.name !== CurrentCompany.name){
      dispatch(CurrentComapanyAction(company))
      navigation.navigate('ListActiveVouchers')
    }
    if(company.name === CurrentCompany.name){ Alert.alert('Hov', 'du bruger allerede selskabet')}
  }

  return(
    <View style={GlobalStyles.container}>
      <ScrollView>
        {allCompanies.map(company =>
          
          <TouchableOpacity style={GlobalStyles.listBox} onPress={e => changeCompany(company)}>
            <View style={GlobalStyles.listTextBox}  >
              <Text style={GlobalStyles.listHeader}>{company.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
      <DefaultNavigation navigation={navigation} />
    </View>
  )
}

export default ChangeCompanyScreen;