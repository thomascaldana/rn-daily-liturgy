import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'

export default function Box ({ children, style, onPress }) {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height

  const boxResponsiveStyles = {
    height: 279 < windowHeight && windowHeight < 330 ? 90 : 120,
  }

  const textResponsiveStyles = {
    fontSize: (279 < windowHeight && windowHeight < 329) ? 16 : 24
  }

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.box, style, boxResponsiveStyles]} onPress={onPress}>
      <Text style={[styles.text, textResponsiveStyles]}>{children}</Text>
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
    borderRadius: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,


  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  }
})