/* @flow */

import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class PageNotFound extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'pink' }}>
        <View style={{ flex: 1 }}>
          <Text>We are sorry</Text>
        </View>
      </View>
    );
  }
}
