import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Prayers from '../../Prayers.json'
import styles from './Styles';

const SaoMiguel = ({ route }) => {

  const navigation = useNavigation();

  const handleClose = () => {
    // Navigate back to the list of prayers
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
      <View style={[styles.header, styles.paddingTopStyles]}>
      </View>
      <Text style={[styles.text, styles.boldStyle]}>Oração de São Miguel</Text>
      <Text style={[styles.paddingTopStyles, styles.text]}>{Prayers.saoMiguel}</Text>
    </View>
  );
};

export default SaoMiguel;