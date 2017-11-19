import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  checker: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRightColor: '#efefef',
    borderRightWidth: 1
  },
  text: {
    textAlign: 'center',
    fontSize: 8,
    textAlignVertical: 'center'
  }
})

const Checker = ({ isChecked, label, onClick, width }) => {
  const getStyle = () => {
    return {
      backgroundColor: isChecked ? 'red' : 'white',
      width
    };
  };

  return (
      <TouchableHighlight style={[styles.checker, getStyle()]}>
        <View>
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableHighlight>
    )
};

export default Checker;
