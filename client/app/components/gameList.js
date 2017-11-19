import React, { Component } from 'react';
import {
  FlatList,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

const GameList = ({ games, onGameClick }) => {
  const cardStyle = {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3f3f3f'
  };

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight style={cardStyle} onPress={() => onGameClick(item.id)}>
        <Text>{item.name}</Text>
      </TouchableHighlight>
    )
  };

  return (
    <View>
      <FlatList
        data={games}
        renderItem={renderItem}
      />
    </View>
  )
}

export default GameList;
