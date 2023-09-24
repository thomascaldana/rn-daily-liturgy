import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import fetchData from '../../services/api';

const FirstRoute = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndUse = async () => {
      try {
        const fetchedData = await fetchData();

        setData(fetchedData);
      } catch (error) {
        console.log('Data not found or an error occurred.');
      }
    };

    fetchDataAndUse();
  }, []);

  return (
    <View>
      {data ? (
        <View style={[styles.container]}>
          <ScrollView>
            <Text style={[styles.text]} >{data.data}</Text>
            <Text style={[styles.text, styles.bold]} >1ª Leitura</Text>
            <Text style={[styles.text]} >{data.primeiraLeitura.referencia}</Text>
            <Text style={[styles.text]} >{data.primeiraLeitura.titulo}</Text>
            <Text style={[styles.text]} >{data.primeiraLeitura.texto}</Text>
            <Text style={[styles.text]} >
            </Text>
            {
              data.segundaLeitura.referencia
                ?
                <View>
                  <Text style={[styles.text, styles.bold]} >2ª Leitura</Text>
                  <Text style={[styles.text]} >{data.segundaLeitura.referencia}</Text>
                  <Text style={[styles.text]} >{data.segundaLeitura.titulo}</Text>
                  <Text style={[styles.text]} >{data.segundaLeitura.texto}</Text>
                </View>
                :
                <Text style={[styles.text]} >Hoje não tem 2ª leitura (apenas no domingo são duas leituras)</Text>
            }
          </ScrollView>
        </View>
      ) : (
        <>
          <Text>Loading data...</Text>
          <ActivityIndicator size="large" color="blue" />

        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  scene: {
    flex: 1,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    marginBottom: 20
  },
  bold: {
    fontWeight: 'bold'
  }
});

export default FirstRoute;
