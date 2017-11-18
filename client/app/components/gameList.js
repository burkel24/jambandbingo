import React, { Component } from 'react';
import {
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

// const GameCard = ()
class GameList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.games}
          renderItem={({item}) => {
            return (
              <TouchableHighlight style={styles.card} onPress={() => this.props.openGame(item.id)}>
                <Text>{item.name}</Text>
              </TouchableHighlight>
            )
          }}
        />
      </View>
    )
  }

  componentDidMount() {
    this.props.loadGames();
  }
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
