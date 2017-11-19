import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Board from './board';
import { GREY } from '../styles/styleVariables';

const styles = StyleSheet.create({
  container: {
    backgroundColor: GREY,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default class Game extends Component {
  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { board, game, availableSongs } = this.props;

    let content;
    if (board && board.checkers) {
      content = <Board checkers={board.checkers} availableSongs={availableSongs} />
    } else {
      content = <Text>Loading…</Text>
    }

    return (
      <View style={styles.container} >{content}</View>
    );
  }
}
