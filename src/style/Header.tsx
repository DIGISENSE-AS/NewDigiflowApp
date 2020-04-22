import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = ({title}) => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60, 
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

Header.defaultProps = {title: 'Digisense'}

export default Header