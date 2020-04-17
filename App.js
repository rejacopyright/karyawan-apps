import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from "react-native-easy-grid"
import { NativeRouter, Switch, Route, Link } from "react-router-native";
import { Text, Image, TextInput, StatusBar } from 'react-native';
import St from './src/assets/styles/index'
import axios from 'axios';
import con from './src/api/api';
// ROUTE
import Home from './src/pages/home'
import Absen from './src/pages/absen'
import Profile from './src/pages/profile/index'
import PageNotFound from './src/pages/pageNotFound'
// import fire from './src/con/fire';
class Footer extends Component {
  render() {
    const menu = [
      { name: 'Home', icon: require('./src/icons/active/home.png'), uri: 'home' },
      { name: 'Orders', icon: require('./src/icons/active/briefcase.png'), uri: 'orders' },
      { name: 'Absen', icon: require('./src/icons/active/finger.png'), uri: 'absen' },
      { name: 'Inbox', icon: require('./src/icons/active/folder.png'), uri: 'inbox' },
      { name: 'Profile', icon: require('./src/icons/active/user.png'), uri: 'profile' }
    ]
    return (
      <Row style={[St.shadowTop, { height: 60, backgroundColor: '#fff' }]}>
        <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#f5f5f5" />
        {
          menu.map((r, key) => (
            <Col key={key} style={[St.center]}>
              <Link to={r.uri} underlayColor="rgba(0,0,0¸0)" style={[St.center]}>
                <>
                  <Image source={r.icon} style={{ resizeMode: "contain", width: 30, height: 30 }}></Image>
                  <Text style={[St.textCenter, St.f10]}>{r.name}</Text>
                </>
              </Link>
            </Col>
          ))
        }
      </Row>
    );
  }
}
class App extends Component {
  onScroll(nativeEvent){
    console.log(nativeEvent);
    // const { contentOffset } = nativeEvent;
    // this.scrollY = contentOffset.y;
    // if (contentOffset.y === this.onScrollEndCallbackTargetOffset) {
    //   this.onScrollEnd()
    // }
  }
  onScrollEnd(){
    alert("TEST");
  }
  render() {
    return (
      <NativeRouter>
        <Col>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/absen" component={Absen} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route component={PageNotFound} />
          </Switch>
          {/* --- Footer --- */}
          <Footer />
        </Col>
      </NativeRouter>
    );
  }
}
export default App
