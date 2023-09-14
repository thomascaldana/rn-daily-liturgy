import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Box from './components/Box';

import Home from './screens/Home';
import DailyLiturgy from './screens/DailyLiturgy';
import MainLayout from './components/MainLayout';

export default function App () {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={MainLayout}
            options={{
              title: 'Bem vindo!',
              headerStyle: {
                backgroundColor: 'lightgreen'
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
            }}
          />

          <Stack.Screen name='Liturgia Diária' component={DailyLiturgy} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaView >
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
