import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import DailyLiturgy from './DailyLiturgy';


export default function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Home page!</Text>
      <StatusBar style="auto" />
      <Button
        title='Go to Daily Liturgy'
        onPress={() => navigation.push('Liturgia Diária')}
      />
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
