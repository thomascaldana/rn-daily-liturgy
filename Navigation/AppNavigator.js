import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrayersComponent from './PrayersComponent'; // Import your component

import SaoMiguel from '../components/PrayerDetailScreens/SaoMiguel'; // Create this screen
import ProvidenciaSantissima from '../components/PrayerDetailScreens/ProvidenciaSantissima'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Prayers">
      <Stack.Screen name="Prayers" component={PrayersComponent} />
      <Stack.Screen name="PrayerDetails" component={SaoMiguel} />
      <Stack.Screen name="providenciaSantissima" component={ProvidenciaSantissima} />
    </Stack.Navigator>
  );
};

export default AppNavigator;