import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameList from '../components/gameList';

const mapStateToProps = state => {
  return { games: [] };
};

const HomeScreenContainer = connect(
  mapStateToProps
)(GameList)



export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Jam Band Bingo',
  };

  render() {
    return (<HomeScreenContainer />)
  }
}
