import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Board from './board';
import Card from './card';
import { GREY } from '../styles/styleVariables';

const styles = StyleSheet.create({
  container: {
    backgroundColor: GREY,
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
    const { board, game, availableSongs } = this.props;

    let content;
    if (board && board.checkers) {
      renderedBoard = <Board checkers={board.checkers} availableSongs={availableSongs} />
      content = <Card title={'My Board'} content={renderedBoard} />
    } else {
      content = <Text>Loading…</Text>
    }

    return (
      <View style={styles.container}>{content}</View>
    );
  }
}
