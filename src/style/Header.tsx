import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';


const Header = ({title}) => {
  const currentCompany = useSelector((state:any) => state.CurrentCompanyReducer)
  return(
    <View style={styles.header}>
      <View style={styles.headerDivider}><Text style={styles.headerText}>{title}</Text></View>
      <View style={styles.headerDivider}><Text style={styles.companyText}>{currentCompany.name}</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60, 
    backgroundColor: '#131C8D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerDivider:{
    width: '100%', 
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  companyText: {
    color: 'white',
    fontSize: 16,
  }
})

Header.defaultProps = {title: 'Digisense'}

export default Header