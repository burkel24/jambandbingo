import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Checker from './checker';
import { BOARD_DIMENSION } from '../actions/board';

const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: 'row',
    borderColor: '#3f3f3f',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 50,
    marginBottom: -1
  },
  container: {
    padding: 25,
    width: '100%'
  }
});

const Board = ({ checkers, availableSongs }) => {
  const renderRow = (index, checkers) => {
    const renderedCheckers = checkers.sort((checkerA, checkerB) => checkerA.col > checkerB.col)
      .map(aChecker => {
        return (
          <Checker isChecked={aChecker.isFree || aChecker.isChecked}
            key={aChecker.key}
            label={aChecker.song ? aChecker.song.name : aChecker.key}
            width={`${100 / BOARD_DIMENSION}%`}
          />
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
    <ScrollView style={styles.container} maximumZoomScale={1.5}>
      <View>
        {displayedRows}
      </View>
    </ScrollView>
  )
}


export default Board;
