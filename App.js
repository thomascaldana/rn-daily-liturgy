import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import DailyLiturgy from './screens/DailyLiturgy';
import Home from './screens/Home';
import PrayersComponent from './screens/Prayers';
// import { ScrollView } from 'react-native-gesture-handler';

export default function App () {

  const Stack = createNativeStackNavigator();
  const Stack2 = createNativeStackNavigator();

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='LITURGIA DIÁRIA'
            component={Home}
            options={{
              title: 'LITURGIA DIÁRIA',
              headerStyle: {
                backgroundColor: '#a2d2ff',
                height: 30,
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
            }}
          />
          <Stack.Screen name='Liturgia Diária' component={DailyLiturgy} />


          <Stack2.Screen
            name='PrayersComponent'
            component={PrayersComponent}
            options={{
              title: 'ORAÇÕES',
              headerStyle: {
                backgroundColor: '#a2d2ff',
                height: 30,
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
            }}
          />
          <Stack2.Screen name='orações' component={PrayersComponent} />

        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  containerMenu: {
    //flex: 1,
    height: 600,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,

  },
  containerItems: {
    gap: 20
  }
});
