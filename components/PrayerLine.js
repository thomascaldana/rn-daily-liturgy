import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PrayerLine = ({ children }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the details screen with additionalInfo
    navigation.navigate('PrayerDetails');
  };

  return (
    <TouchableOpacity
      style={[styles.container, styles.marginBottom]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default PrayerLine;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10

  }


});
