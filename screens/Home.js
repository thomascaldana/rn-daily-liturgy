import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Box from '../components/HomeComponents/Box';


export default function Home ({ navigation }) {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height

  const containerStyle = {
    flexDirection: windowWidth > windowHeight ? 'column' : 'row',
  };

  const containerItemsStyle = {
    flexDirection: windowWidth > windowHeight ? 'row' : 'column',
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.containerItems, containerItemsStyle]}>
        <Box style={[{ backgroundColor: '#80ed99' }]} onPress={() => navigation.push('Pregações')}>Pregações</Box>
        <Box style={{ backgroundColor: '#bde0fe' }} onPress={() => navigation.push('Chaplets')}>Terços</Box>
        <Box style={{ backgroundColor: '#a2d2ff' }} onPress={() => navigation.push('Helpus')} >Nos ajude</Box>
      </View>

      <View style={[styles.containerItems, containerItemsStyle]}>
        <Box style={{ backgroundColor: '#bde0fe' }} onPress={() => navigation.push('PrayersComponent')} >Orações</Box>
        <Box style={{ backgroundColor: '#a2d2ff' }} onPress={() => navigation.push('Novenas')}>Novenas</Box>
        <Box style={{ backgroundColor: '#80ed99' }} onPress={() => navigation.push('Products')} >Produtos católicos</Box>

      </View>

    </View >
  )
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    //height: 
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: 'white'

  },
  containerItems: {
    gap: 10,
  }
})