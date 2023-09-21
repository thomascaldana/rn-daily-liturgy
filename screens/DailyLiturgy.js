import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TabViewExample from '../components/Navegation'

export default function DailyLiturgy ({ navigation }) {



  return (
    <View style={styles.container}>
      <Text>Daily Liturgy page</Text>
      <TabViewExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 24
  },
});
