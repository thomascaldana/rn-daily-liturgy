import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Prayers from '../../Prayers.json'
import styles from './Styles';

const EmBreve = ({ route }) => {

  const navigation = useNavigation();

  const handleClose = () => {
    // Navigate back to the list of prayers
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
        <View style={[styles.header, styles.paddingTopStyles]}>
        </View>
        <Text style={[styles.text, styles.boldStyle]}>EmBreve</Text>

        <Text style={[styles.paddingTopStyles, styles.text]}>

          {`
EmBreve
`}
        </Text>

      </View>
    </ScrollView>
  );
};

export default EmBreve;