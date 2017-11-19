import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Checker from './checker';
import { BOARD_DIMENSION } from '../actions/board';
import { GREY } from '../styles/styleVariables';

const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: 'row',
    height: 75,
  },
  container: {
    borderTopWidth: 1,
    borderColor: GREY
  }
});

const Board = ({ checkers, availableSongs }) => {
  const renderRow = (index, checkers) => {
    const renderedCheckers = checkers.sort((checkerA, checkerB) => checkerA.col > checkerB.col)
      .map(aChecker => {

        return (
          <Checker checker={aChecker} key={aChecker.key}/>
        );
      });

    return (
      <View style={styles.row} key={index}>
        {renderedCheckers}
      </View>
    );
  };

  const displayedRows = new Array(BOARD_DIMENSION).fill([]).map((content, index) => {
    return renderRow(index, checkers.filter(aChecker => aChecker.row === index));
  });

  return (
    <View style={styles.container}>
      {displayedRows}
    </View>
  )
}


export default Board;
