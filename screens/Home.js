import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import DailyLiturgy from './DailyLiturgy';
import MainLayout from '../components/HomeComponents/MainLayout';


export default function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <MainLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
