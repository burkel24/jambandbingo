import React from 'react';
import { Text, View } from 'react-native';

import CardStyle from '../styles/cardStyles';

const Card = ({ title, content }) => {

  return (
    <View style={CardStyle.container}>
      <View style={CardStyle.header}>
        <Text style={CardStyle.headerText}>
          {title}
        </Text>
      </View>

      <View style={CardStyle.body}>{content}</View>
    </View>
  )
};

export default Card;
