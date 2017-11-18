import React, { Component } from 'react';
import {
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

// const GameCard = ()
const GameList = ({ games, onGameClick }) => {
  return (
    <View>
      <FlatList
        data={games}
        renderItem={({item}) => {
          return (
            <TouchableHighlight style={styles.card} onPress={() => onGameClick(item.id)}>
              <Text>{item.name}</Text>
            </TouchableHighlight>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3f3f3f'
  }
});

export default GameList;
