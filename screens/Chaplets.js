import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrayerLine from '../components/PrayerLine';
import TercoProvidencia from '../components/ChapletsDetailScreens/TercoProvidencia';
import TercoMariano from '../components/ChapletsDetailScreens/TercoMariano';
import TercoSaoJose from '../components/ChapletsDetailScreens/TercoSaoJose';
import EmBreve from '../components/ChapletsDetailScreens/EmBreve';


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
              <TouchableOpacity onPress={() => handlePrayerClick('TercoProvidencia')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Terço da Providência Santíssima</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('TercoMariano')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Terço Mariano / Rosário</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('TercoSaoJose')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Terço de São José</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('EmBreve')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Em breve</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('EmBreve')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Em breve</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handlePrayerClick('EmBreve')} style={[styles.container]} activeOpacity={0.65}>
                <Text>Em breve</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        )}
      </Stack.Screen>
      <Stack.Screen name="TercoProvidencia" component={TercoProvidencia} />
      <Stack.Screen name="TercoMariano" component={TercoMariano} />
      <Stack.Screen name="TercoSaoJose" component={TercoSaoJose} />
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
