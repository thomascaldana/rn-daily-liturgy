import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  closeButton: {
    padding: 10,
    position: 'absolute',
    right: -15,
    top: -20,
    width: 80,
    zIndex: 2

  },
  closeButtonText: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paddingTopStyles: {
    paddingTop: 25,
  },
  text: {
    fontSize: 20,
    textAlign: 'justify'
  },
  boldStyle: {
    fontWeight: 'bold',
    maxWidth: '70%',
    textAlign: 'center'

  }

});

export default styles;