import { StyleSheet } from 'react-native';

const flexStyles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    flexDirection: 'column'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifySpaceBetween: {
    justifyContent: 'space-between'
  },
  alignCenter: {
    alignItems: 'center'
  }
});

export default flexStyles;
