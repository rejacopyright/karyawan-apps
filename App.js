import React, { Component, Fragment } from 'react';
import {YellowBox} from 'react-native';
import { NativeRouter, Switch, Route, Link } from "react-router-native";
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';
import con from './src/api/api';
// ROUTE
import Home from './src/pages/home'
import PageNotFound from './src/pages/pageNotFound'
// import fire from './src/con/fire';
const styles = StyleSheet.create({
  shadowTop: {
    borderTopWidth:1,
    borderColor: '#fafafa',
    // borderRadius: 20,
    elevation: 10
  },
  shadowBottom: {
    // borderTopWidth:0,
    borderColor: 'rgba(255,255,255,0)',
    // borderRadius: 20,
    elevation: 5
  },
});
class Footer extends Component {
  render() {
    const menu = [
      { name: 'Home', icon: require('./src/icons/active/home.png'), uri: 'home' },
      { name: 'Orders', icon: require('./src/icons/active/briefcase.png'), uri: 'orders' },
      { name: 'Search', icon: require('./src/icons/active/search.png'), uri: 'search' },
      { name: 'Inbox', icon: require('./src/icons/active/folder.png'), uri: 'inbox' },
      { name: 'Account', icon: require('./src/icons/active/user.png'), uri: 'account' }
    ]
    return (
      <View style={[{ height: 60, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }, styles.shadowTop]}>
        {
          menu.map((r, key) => (
            <Link to={r.uri} key={key} style={{ flex: 1, alignItems: 'center' }} underlayColor="rgba(0,0,0¸0)">
              <View>
                <View style={{ height:30, width:30 }}>
                  <Image source={r.icon} style={{ resizeMode: "contain", width: '100%', height: '100%' }}></Image>
                </View>
                <Text style={{ fontSize: 10, color: '#555', marginTop: 2 }}>{r.name}</Text>
              </View>
            </Link>
          ))
        }
      </View>
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
        <View style={{ flex: 1 }} key={1}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
          {/* --- Footer --- */}
          <Footer />
        </View>
      </NativeRouter>
    );
  }
}
export default App
