import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrayerLine from '../components/PrayerLine';
import SaoMiguel from '../components/PrayerDetailScreens/SaoMiguel';
import ProvidenciaSantissima from '../components/PrayerDetailScreens/ProvidenciaSantissima';
import Salmo90 from '../components/PrayerDetailScreens/Salmo90';
import EmBreve from '../components/PrayerDetailScreens/EmBreve';


const Stack = createStackNavigator();

const PrayersComponent = () => {
  const navigation = useNavigation();

  const handlePrayerClick = (prayerTitle) => {
    navigation.navigate(prayerTitle, {
      additionalInfo: `Additional information for ${prayerTitle}`,
    });
  };

  return (
    <Stack.Navigator initialRouteName="PrayersList" headerMode="none">
      <Stack.Screen name="PrayersList">
        {() => (
          <ScrollView >
            <View style={styles}>
              <TouchableOpacity onPress={() => handlePrayerClick('SaoMiguel')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Oração a São Miguel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('ProvidenciaSantissima')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Oração da Providência Santíssima</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('Salmo90')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Salmo 90</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('EmBreve')} style={[styles.container]} activeOpacity={0.65}>
                <Text>EmBreve</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('EmBreve')} style={[styles.container]} activeOpacity={0.65}>
                <Text>EmBreve</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('EmBreve')} style={[styles.container]} activeOpacity={0.65}>
                <Text>EmBreve</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        )}
      </Stack.Screen>
      <Stack.Screen name="SaoMiguel" component={SaoMiguel} />
      <Stack.Screen name="ProvidenciaSantissima" component={ProvidenciaSantissima} />
      <Stack.Screen name="Salmo90" component={Salmo90} />
      <Stack.Screen name="EmBreve" component={EmBreve} />
      {/* Add screens for other prayer details */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  }

});

export default PrayersComponent;
