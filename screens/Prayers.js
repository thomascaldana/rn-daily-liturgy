import React, { View, Text, StyleSheet } from 'react-native'
import Prayers from '../Prayers.json'

const PrayersComponent = () => {


  return (
    <View>
      <Text>{Prayers.saoMiguel}</Text>
    </View>
  )
}


export default PrayersComponent