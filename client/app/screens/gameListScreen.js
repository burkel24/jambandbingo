import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadGames } from '../actions/games';
import GameList from '../components/gameList';

const mapStateToProps = state => {
  return { games: state.games };
};

const GameListContainer = connect(
  mapStateToProps
)(GameList)

export default class GameListScreen extends Component {
  static navigationOptions = {
    title: 'Games',
  };

  openGame(gameId) {
    const { navigate } = this.props.navigation;
    navigate('Game', { gameId });
  }

  render = () => (<GameListContainer onGameClick={this.openGame.bind(this)} />);
}
