import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Prayers from '../../Prayers.json'
import styles from './Styles';

const TercoSaoJose = ({ route }) => {

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
        <Text style={[styles.text, styles.boldStyle]}>Terço a São José</Text>

        <Text style={[styles.paddingTopStyles, styles.text]}>

          {`
Nas contas grandes:

Meu glorioso São José, nas vossas maiores aflições e tribulações, não vos valeu o anjo do Senhor? Valei-me, São José!


Nas contas pequenas:

Valei-me, São José.


No fim, reze este oferecimento:

“A vós, glorioso São José, ofereço este terço em louvor e glória de Jesus e Maria, para que seja minha luz e guia, minha proteção e defesa, minha fortaleza e alegria em todos os meus trabalhos e tribulações, principalmente na hora da agonia.

Pelo nome de Jesus, pela glória de Maria, imploro o vosso poderoso patrocínio, para que me alcanceis a graça que tanto desejo. Falai em meu favor, advogai a minha causa no Céu e na Terra, alegrai a minha alma para honra de Jesus, de Maria e vossa. Amém.”
`}
        </Text>

      </View>
    </ScrollView>
  );
};

export default TercoSaoJose;