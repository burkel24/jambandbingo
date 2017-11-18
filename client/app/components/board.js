import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { BOARD_DIMENSION } from '../reducers/boardsByGameId';

const styles = StyleSheet.create({
  row: {
    flex: -1,
    flexDirection: 'row',
    borderColor: '#3f3f3f',
    borderWidth: 1,
    height: 50
  },
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  checker: {
    backgroundColor: 'white',
    flexGrow: 1,
    borderRightColor: '#efefef',
    borderRightWidth: 1
  },
  centerText: {
    textAlign: 'center'
  }
});

const Board = ({ checkers, availableSongs }) => {
  const renderChecker = (checker) => {
    return (
      <TouchableHighlight style={styles.checker}>
        <Text style={styles.centerText}>{checker.key}</Text>
      </TouchableHighlight>
    )
  };

  const renderRow = (checkers) => {
    const renderedCheckers = checkers.sort((checkerA, checkerB) => checkerA.col > checkerB.col)
      .map(renderChecker);

    return (
      <View style={styles.row}>
        {renderedCheckers}
      </View>
    );
  };

  const displayedRows = new Array(BOARD_DIMENSION).fill([]).map((content, index) => {
    return renderRow(checkers.filter(aChecker => aChecker.row === index));
  });

  return (
    <View style={styles.container}>
      <View>
        {displayedRows}
      </View>
    </View>
  )
}


export default Board;
