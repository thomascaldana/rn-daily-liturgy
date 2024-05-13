import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import DailyLiturgy from './screens/DailyLiturgy';
import Helpus from './screens/Helpus';
import Products from './screens/Products';
import Novenas from './screens/Novenas';
import Home from './screens/Home';
import PrayersComponent from './screens/Prayers';
import Chaplets from './screens/Chaplets'
// import { ScrollView } from 'react-native-gesture-handler';

export default function App () {

  const Stack = createNativeStackNavigator();
  const Stack2 = createNativeStackNavigator();
  const Stack3 = createNativeStackNavigator();
  const Stack4 = createNativeStackNavigator();
  const Stack5 = createNativeStackNavigator();
  const Stack6 = createNativeStackNavigator();

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='CAMINHO DE FÉ'
            component={Home}
            options={{
              title: 'CAMINHO DE FÉ',
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
          <Stack.Screen name='Pregações' component={DailyLiturgy} />


          <Stack2.Screen
            name='PrayersComponent'
            component={PrayersComponent}
            options={{
              title: 'Orações 🙏🏼',
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


          <Stack3.Screen
            name='Chaplets'
            component={Chaplets}
            options={{
              title: 'Terços 🙏🏼',
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
          <Stack3.Screen name='tercos' component={Helpus} />

          <Stack4.Screen
            name='Helpus'
            component={Helpus}
            options={{
              title: 'Nos ajude 🙏🏼',
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
          <Stack5.Screen
            name='Products'
            component={Products}
            options={{
              title: 'Produtos Católicos',
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
          <Stack5.Screen
            name='Novenas'
            component={Novenas}
            options={{
              title: 'Novenas',
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
