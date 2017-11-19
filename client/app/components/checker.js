import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { BOARD_DIMENSION } from '../actions/board';
import flexStyles from '../styles/flexStyles';
import { CHARCOAL, GREEN, GREY } from '../styles/styleVariables';

const Checker = ({ checker }) => {
  const isFilled = checker.isChecked || checker.isFree;

  const styles = StyleSheet.create({
    checker: {
      borderColor: GREY,
      backgroundColor: isFilled ? GREEN : 'white',
      borderRightWidth: checker.col < (BOARD_DIMENSION - 1) ? 1 : 0,
      borderBottomWidth: checker.row < (BOARD_DIMENSION - 1) ? 1 : 0
    },
    text: {
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 12,
      textAlignVertical: 'center',
      color: isFilled ? 'white' : CHARCOAL,
    }
  });

  let label;
  if (checker.isFree) {
    label = 'FREE';
  } else {
    label = checker.song ? checker.song.name : checker.key;
  }

  const containerStyles = [
    styles.checker,
    flexStyles.col,
    flexStyles.justifyCenter,
    flexStyles.alignCenter
  ];

  return (
      <TouchableHighlight style={containerStyles}>
        <View>
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableHighlight>
    )
};

export default Checker;
