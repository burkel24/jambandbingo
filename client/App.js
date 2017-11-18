import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  render() {
    return (<Text>Hey</Text>)
  }
}

const styles = StyleSheet.create({});
