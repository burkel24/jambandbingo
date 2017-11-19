import moment from 'moment';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import CardStyle from '../styles/cardStyles';
import flexStyles from '../styles/flexStyles';
import {
  BLUE,
  DARK_GREY,
  GREEN
} from '../styles/styleVariables';

const GameListCard = ({ game, onGameClick }) => {
  let status, borderLeftColor;

  if (game.completed) {
    borderLeftColor = GREEN;
    status = 'Completed';
  } else if (game.startTime < Date.now()) {
    borderLeftColor = BLUE;
    status = 'In Progress';
  } else {
    borderLeftColor = DARK_GREY;

    // Do some hacky date stuff
    const start = moment(game.startTime),
      matches = /(.*)\sat\s/.exec(start.calendar());

    if (matches && matches.length > 1) {
      if (matches[1] === 'Today') {
        status = start.calendar().replace(matches[0], '')
      } else {
        status = matches[1];
      }
    } else {
      status = start.format('M/D/YY');
    }
  }

  return (
    <TouchableHighlight
      style={[CardStyle.container, gameStyle.container, { borderLeftColor }]}
      onPress={() => onGameClick(game.id)}>

      <View style={flexStyles.col}>
        <View style={[
          flexStyles.row,
          flexStyles.justifySpaceBetween,
          flexStyles.alignCenter]}
         >
          <Text style={gameStyle.header}>{game.artist}</Text>
          <Text>{status}</Text>
        </View>

        <View>
          <Text style={gameStyle.subHeader}>
            {game.venue.name} - {game.venue.city}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const gameStyle = StyleSheet.create({
  container: {
    padding: 25,
    paddingLeft: 15,
    borderLeftWidth: 25,
    marginBottom: 15
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 5
  },
  subHeader: {
    color: DARK_GREY
  }
});

export default GameListCard;
