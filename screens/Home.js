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
        <Box style={[{ backgroundColor: '#80ed99' }]} onPress={() => navigation.push('Liturgia Diária')}>Liturgia Diária</Box>
        <Box style={{ backgroundColor: '#bde0fe' }}  >Santo do Dia</Box>
        <Box style={{ backgroundColor: '#a2d2ff' }}>Músicas</Box>
      </View>

      <View style={[styles.containerItems, containerItemsStyle]}>
        <Box style={{ backgroundColor: '#bde0fe' }}>Orações</Box>
        <Box style={{ backgroundColor: '#a2d2ff' }}>Nos ajude</Box>
        <Box style={{ backgroundColor: '#80ed99' }}>Produtos católicos</Box>

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
    borderColor: 'red',
    backgroundColor: 'white'

  },
  containerItems: {
    gap: 10,
  }
})