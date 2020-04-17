/* @flow */

import React, { Component, Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import Avatar from '../assets/images/maintenance.svg';

export default class PageNotFound extends Component {
  render() {
    return (
      <Grid>
        <Col style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Image source={require('../assets/images/maintenance.png')} style={{ width: 75, height:75, opacity: 0.15, marginBottom: 25 }} />
          <Text style={{ textAlign: 'center', width: '75%', color: '#aaa' }}>We are sorry but the page you are looking for does not exist</Text>
        </Col>
      </Grid>
    );
  }
}
