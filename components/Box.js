import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Box ({ children, style, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.box, style]} onPress={onPress}>
      <Text style={[styles.text]}>{children}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 5,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15


  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  }
})