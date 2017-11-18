import React from 'react';
import { Text } from 'react-native';

const Game = ({ game }) => {
  return (
    <Text>{game.name}</Text>
  )
};

export default Game;
