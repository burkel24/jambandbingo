import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Board from './board';

const styles = StyleSheet.create({
  container: {
    padding: 25,
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
    const { board, game } = this.props;

    let content;
    if (board && board.checkers) {
      content = <Board checkers={board.checkers} />
    } else {
      content = <Text>Loading…</Text>
    }

    return (
      <View style={styles.container} >{content}</View>
    );
  }
}
