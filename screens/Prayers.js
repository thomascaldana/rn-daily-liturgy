import React, { View, Text, StyleSheet, ScrollView } from 'react-native'
import Prayers from '../Prayers.json'
import PrayerLine from '../components/PrayerLine'
import Box from '../components/HomeComponents/Box'
import { Modal } from 'react-native-web'

const PrayersComponent = () => {


  return (
    <ScrollView style={[styles.container]}>
      <Text>{Prayers.saoMiguel}</Text>
      <PrayerLine>Oração de São Miguel</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
      <PrayerLine>Oração de Santa Rita</PrayerLine>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
  }
})


export default PrayersComponent