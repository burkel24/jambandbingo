import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

    if (board && board.checkers) {
      return (
        <View style={styles.container} >
          <Text>{this.props.board.checkers.length}</Text>
        </View>
      );
    } else {
      return (
        <Text>Loading…</Text>
      );
    }
  }

}
