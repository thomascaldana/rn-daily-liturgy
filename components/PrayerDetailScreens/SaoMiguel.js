import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Prayers from '../../Prayers.json'

const SaoMiguel = ({ route }) => {
  const { additionalInfo } = route.params;
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
      <Text>{additionalInfo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  closeButton: {
    padding: 10,
    position: 'absolute',
    right: -15,
    top: -20,
    width: 80,

  },
  closeButtonText: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paddingTopStyles: {
    paddingTop: 25,
  },
  text: {
    fontSize: 20,
    textAlign: 'justify'
  },
  boldStyle: {
    fontWeight: 'bold'

  }

});

export default SaoMiguel;