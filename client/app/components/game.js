import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Game = ({ board, game }) => {
  return (
    <View style={styles.container}>
      <Text>{game.name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default Game;
