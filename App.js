import React, { Component } from 'react'
import { Row, Col } from 'react-native-easy-grid'
import { NativeRouter, Switch, Route, Link } from "react-router-native"
import { Text, Image, TextInput, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import St from './src/assets/styles/index'
// NETWORK
import { connect } from 'react-redux';
import Login from './src/pages/layouts/login'
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
  _isMounted = false;
  state = {
    user: {},
    auth: false,
    loading: true
  }
  componentDidMount(){
    this._isMounted = true;
    AsyncStorage.getItem('auth').then(r => {
      this.setState({auth:r, loading: false});
    });
  }
  componentDidUpdate(prev){
    console.log(this.props.auth !== prev.auth);
    AsyncStorage.getItem('auth').then(r => {
      if (this.props.auth !== prev.auth && r && this._isMounted) {
        this.setState({auth:r, loading: false});
      }else if (this.props.auth !== prev.auth && !r) {
        this.setState({auth:false, loading: false});
      }
    });
  }
  render() {
    if (this.state.loading) {
      return(
        <Col style={[St.center]}>
          <StatusBar backgroundColor="#ccc" hidden />
          <Image resizeMode="contain" source={require('./src/icons/brands/hk-logo.png')} style={[St.same75]}></Image>
          {/* <Text style={[St.fMuted]}>Loading coeg...</Text> */}
        </Col>
      )
    }
    if (!this.state.auth) {
      return(
        <Login />
      )
    }
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
export default connect(s => s)(App)
