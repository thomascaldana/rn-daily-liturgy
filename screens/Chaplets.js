import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrayerLine from '../components/PrayerLine';
import SaoMiguel from '../components/ChapletsDetailScreens/SaoMiguel';
import ProvidenciaSantissima from '../components/ChapletsDetailScreens/ProvidenciaSantissima';
import Salmo90 from '../components/ChapletsDetailScreens/Salmo90';


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
                <Text>Terço da Providência Santíssima</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('ProvidenciaSantissima')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Oração da Providência Santíssima</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('Salmo90')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Salmo 90</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('SaoMiguel')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Oração a São Miguel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('ProvidenciaSantissima')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Oração da Providência Santíssima</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('Salmo90')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Salmo 90</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        )}
      </Stack.Screen>
      <Stack.Screen name="SaoMiguel" component={SaoMiguel} />
      <Stack.Screen name="ProvidenciaSantissima" component={ProvidenciaSantissima} />
      <Stack.Screen name="Salmo90" component={Salmo90} />
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
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
      },
      android: {
        elevation: 4, // On Android, use elevation for shadow
      },
    }),
  },

});

export default PrayersComponent;
