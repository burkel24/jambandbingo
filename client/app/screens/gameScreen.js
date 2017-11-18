import React, { Component } from 'react';
import { connect } from 'react-redux';

import Game from '../components/game';

const mapStateToProps = (state, ownProps) => {
  const game = state.games.find(aGame => aGame.id === ownProps.gameId);
  const board = state.boardsById[game.boardId];

  return {
    game,
    board
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
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
