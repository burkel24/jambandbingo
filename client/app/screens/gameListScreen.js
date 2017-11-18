import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadGames } from '../actions/games';
import GameList from '../components/gameList';

const mapStateToProps = state => {
  return { games: state.games };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadGames: () => dispatch(loadGames())
  }
};

const GameListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList)

export default class GameListScreen extends Component {
  static navigationOptions = {
    title: 'Jam Band Bingo',
  };

  openGame(gameId) {
    const { navigate } = this.props.navigation;
    navigate('Game', { gameId });
  }

  render = () => (<GameListContainer openGame={this.openGame.bind(this)} />);
}
