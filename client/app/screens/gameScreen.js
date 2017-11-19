import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBoard } from '../actions/board';
import Game from '../components/game';

const mapStateToProps = (state, ownProps) => {
  const game = state.games.find(aGame => aGame.id === ownProps.gameId);

  const board = state.boardsByGameId[ownProps.gameId];
  if (board && board.checkers) {
    board.checkers.filter(aChecker => !!aChecker.songId).forEach(aChecker => {
      aChecker.song = state.songsById[aChecker.songId]
    });
  }

  const availableSongs = state.songs.map(songId => state.songsById[songId])
    .filter(aSong => aSong.artist === 'Umphreys Mcgee')

  return {
    availableSongs,
    game,
    board
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => {
      dispatch(fetchBoard(ownProps.gameId))
    }
  };
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default class GameScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Game ${navigation.state.params.gameId}`
  });

  render = () => {
    const { params } = this.props.navigation.state;
    return (<GameContainer gameId={params.gameId} />);
  }
}
