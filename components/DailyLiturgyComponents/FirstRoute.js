
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <Text>Leituras e Salmos</Text>
  </View>
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    textAlign: 'center'
  },
});

export default FirstRoute;
