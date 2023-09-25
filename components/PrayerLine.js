import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
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
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
      },
      android: {
        elevation: 4, // On Android, use elevation for shadow
      },
    }),
  },


});
