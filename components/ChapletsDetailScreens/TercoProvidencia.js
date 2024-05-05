import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
      <Text style={[styles.text, styles.boldStyle]}>Terço da Providência Santíssima</Text>
      <ScrollView>
        <Text style={[styles.paddingTopStyles, styles.text]}>

          {`No Início:

(Intenções do terço)

Segurando a cruz, rezar o Credo, o Pai-Nosso e as três Ave-Marias, intercalando-as com a seguinte jaculatória: “ Deus provê, Deus proverá, sua misericórdia não faltará”.

Nas  contas grandes:
Providência Santíssima do eterno, onipotente e misericordioso Deus, que tudo tendes providenciados e providenciareis para o nosso bem, providenciai em todas as nossas necessidades. Assim creio. Assim espero. Seja sempre feita a vossa Santíssima vontade. Amém.

Na contas pequenas:
Providência Santíssima, providenciai!

No final de cada dezena:
Rezar o Glória ao Pai

No final:

Rezar a Salve-Rainha

(fim)




`}
        </Text>

      </ScrollView>
    </View>
  );
};

export default SaoMiguel;