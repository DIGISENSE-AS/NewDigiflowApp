import React from 'react'; 
import {DrawerItems} from 'react-navigation-drawer'
import {View, Text} from 'react-native'


export const CostumDrawerNavigation = (props) => {
  //console.log(navigation)
  return(
    <View>
      <Text>costum drawer component</Text>
      <DrawerItems {...props} />
    </View>
  )
}

