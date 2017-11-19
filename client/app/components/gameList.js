import React from 'react';
import { FlatList, Text, View } from 'react-native';

import GameListCard from './gameListCard';
import { GREY } from '../styles/styleVariables';

const GameList = ({ games, onGameClick }) => {
  const containerStyles = {
    backgroundColor: GREY,
    height: '100%',
    padding: 15
  };

  const renderItem = ({item}) => {
    return (<GameListCard game={item} onGameClick={onGameClick} />)
  };

  return (
    <View style={containerStyles}>
      <FlatList data={games} renderItem={renderItem} />
    </View>
  )
}

export default GameList;
