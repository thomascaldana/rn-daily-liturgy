import { StyleSheet, View } from 'react-native';
import Box from './Box';

export default function MainLayout () {




  return (
    <View style={[styles.container]}>
      <View style={[styles.containerItems]}>
        <Box style={{ backgroundColor: '#8e9bcc' }}>Liturgia Diária</Box>
        <Box style={{ backgroundColor: '#8e9bcc' }}  >Santo do Dia</Box>
        <Box style={{ backgroundColor: '#8e9bcc' }}>Músicas</Box>
      </View>

      <View style={[styles.containerItems]}>
        <Box style={{ backgroundColor: '#8e9bcc' }}>Orações</Box>
        <Box style={{ backgroundColor: '#8e9bcc' }}>Nos ajude</Box>
        <Box style={{ backgroundColor: 'lightgreen' }}>Produtos católicos</Box>

      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 600,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 6,
    borderColor: 'red'
  },
  containerItems: {
    gap: 20
  }
})