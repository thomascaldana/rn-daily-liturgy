import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Prayers from '../../Prayers.json'
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

const TercoMariano = ({ route }) => {

  const navigation = useNavigation();

  const handleClose = () => {
    // Navigate back to the list of prayers
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
        <View style={[styles.header, styles.paddingTopStyles]}>
        </View>
        <Text style={[styles.text, styles.boldStyle]}>Terço Mariano / Rosário </Text>
        <Text style={[styles.paddingTopStyles, styles.text]}>

          {`
Dicas para rezar  o terço:

Em resumo, a estrutura do Santo Terço fica assim:

1) Oração inicial e/ou intenções;
2) Sinal da cruz;
3) Creio;
4) Um Pai-Nosso e três Ave-Marias;
5) Glória-ao-Pai;
6) Anúncio do mistério, seguido por um Pai-Nosso e dez Ave-Marias;
7) Glória-ao-Pai seguido pelas jaculatórias;
8) Rezam-se os demais mistérios conforme o primeiro;
9) Após o quinto mistério, reza-se a oração de agradecimento seguida pela Salve-Rainha;
10) Finaliza-se como Sinal da Cruz.

A lista completa de cada mistério é esta:
MISTÉRIOS GOZOSOS (segunda-feira e sábado)
1. A Anunciação do anjo à Virgem Maria.
2. A visitação de Nossa Senhora à sua prima Santa Isabel.
3. O nascimento do Menino Jesus em Belém.
4. A Apresentação do Senhor ao Templo (e a purificação da Virgem Maria).
5. A perda e o encontro do Menino-Deus no Templo.

MISTÉRIOS LUMINOSOS (quinta-feira)
1. O batismo do Senhor no Jordão.
2. A autorrevelação de Cristo nas bodas de Caná.
3. O anúncio do Reino de Deus e o convite à conversão.
4. A Transfiguração do Senhor.
5. A instituição da Santíssima Eucaristia.

MISTÉRIOS DOLOROSOS (terça e sexta-feira)
1. A agonia de Jesus no Horto das Oliveiras.
2. A flagelação do Senhor.
3. A coroação de espinhos.
4. Jesus carregando a cruz até o Calvário.
5. A crucificação e morte de Jesus.

MISTÉRIOS GLORIOSOS (quarta-feira e domingo)
1. A Ressurreição do Senhor.
2. A Ascensão do Senhor aos céus.
3. A vinda do Espírito Santo.
4. A Assunção de Nossa Senhora ao céu.
5. A coroação de Maria Santíssima no céu.
`}
        </Text>
      </ScrollView>
    </View>
  );
};


export default TercoMariano;