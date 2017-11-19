import { StyleSheet } from 'react-native';

import { DARK_GREY } from './styleVariables';

const CardStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 5,
    shadowColor: DARK_GREY,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .25
  }
});

export default CardStyle;
