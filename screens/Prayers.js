import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrayerLine from '../components/PrayerLine'; // Import your PrayerLine component
import SaoMiguel from '../components/PrayerDetailScreens/SaoMiguel'; // Import your PrayerDetailsScreen component
import ProvidenciaSantissima from '../components/PrayerDetailScreens/ProvidenciaSantissima'; // Import your PrayerDetailsScreen component


const Stack = createStackNavigator();
const Stack2 = createStackNavigator();

const PrayersComponent = () => {
  const navigation = useNavigation();

  const handlePrayerClick = (prayerTitle) => {
    // Navigate to the details screen with additionalInfo
    navigation.navigate('ProvidenciaSantissima', { additionalInfo: `Additional information for ${prayerTitle}` });
  };

  return (
    <Stack.Navigator initialRouteName="PrayersList" headerMode="none">
      <Stack.Screen name="PrayersList">
        {() => (
          <ScrollView style={styles.container}>
            <PrayerLine title="Oração de São Miguel" onPress={() => handlePrayerClick('Oração de São Miguel')}>
              Oração de São Miguel
            </PrayerLine>
            <PrayerLine title="Oração da Providencia Santissima" onPress={() => handlePrayerClick('Oração de Santa Rita')}>
              Oração da Providencia Santissima
            </PrayerLine>

          </ScrollView>
        )}
      </Stack.Screen>
      <Stack.Screen name="PrayerDetails" component={SaoMiguel} />
      <Stack2.Screen name="ProvidenciaSantissima" component={ProvidenciaSantissima} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
  },
});

export default PrayersComponent;
