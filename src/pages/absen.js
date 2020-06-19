import React, { Component, Fragment } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Grid, Row, Col } from "react-native-easy-grid";
import Avatar from '../assets/images/maintenance.svg';

export default class Absen extends Component {
  render() {
    return (
      <Grid>
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', width: '75%', color: '#aaa' }}>Wes are sorry but the page you are looking for does not exist</Text>
        </Row>
      </Grid>
    );
  }
}
