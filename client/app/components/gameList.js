import React from 'react';
import { FlatList, Text, View } from 'react-native';

const GameList = ({ games, onGameClick}) => {



  return (
    <View>
      <FlatList
        data={games}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  )
}

export default GameList;
