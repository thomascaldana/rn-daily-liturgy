
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <Text>Evangelho do dia</Text>
  </View>
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    textAlign: 'center'
  },
});

export default SecondRoute;
