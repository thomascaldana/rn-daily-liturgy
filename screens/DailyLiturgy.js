import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DailyLiturgy ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Daily Liturgy page</Text>
      <StatusBar style="auto" />
      <Button title='Go back to Home' onPress={() => navigation.goBack()} />
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
