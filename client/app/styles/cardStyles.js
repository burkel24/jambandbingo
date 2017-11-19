import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, BLUE, DARK_GREY } from './styleVariables';

const CardStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: BORDER_RADIUS,
    shadowColor: DARK_GREY,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .25
  },
  header: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    backgroundColor: BLUE,
    padding: 15
  },
  headerText: {
    fontWeight: '600',
    fontSize: 24,
    color: '#FFF'
  },
  body: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    overflow: 'hidden'
  }
});

export default CardStyle;
