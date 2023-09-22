import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
          <Text style={[styles.text]} >{data.data}</Text>
          <Text style={[styles.text]} >{data.primeiraLeitura.referencia}</Text>
          <Text style={[styles.text]} >{data.primeiraLeitura.titulo}</Text>
          <Text style={[styles.text]} >{data.primeiraLeitura.texto}</Text>
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

  }
});

export default FirstRoute;
