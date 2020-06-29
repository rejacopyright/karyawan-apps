import React, { Component, Fragment } from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar, Image as Img } from 'react-native-elements'
import { Row, Col } from 'react-native-easy-grid'
import { connect } from 'react-redux'
import St from '../assets/styles/index'

import axios from 'axios';
import con from '../api/api';

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
class SearchBar extends Component {
  render() {
    return (
      <View style={[{ flexDirection: 'row', marginBottom: 10, backgroundColor: '#fff', marginHorizontal: -15, marginVertical: -10, paddingHorizontal: 15, paddingVertical: 10 }, styles.shadowBottom]}>
        <View style={{ position: 'relative', flex: 1, flexDirection: 'row' }}>
          <Image source={require('../icons/active/search.png')} style={{ width: 25, height: 25, position: 'absolute', top: '25%', left: 15 }} />
          <TextInput placeholder='Search here...' style={{ flex: 1, borderWidth: 1, borderColor: '#eee', borderRadius: 50, fontSize: 16, paddingLeft: 50, paddingRight: 20 }} />
        </View>
        <View style={{ width: 50 }}>
          <Image source={require('../icons/active/bell.png')} style={{ width: 25, height: 25, position: 'absolute', top: '25%', left: 15 }} />
        </View>
      </View>
    );
  }
}
class Home extends Component {
  componentDidMount(){
    // con.then(u => {
    //   axios.get(u.api+'/me', {headers:u.headers}).then(r => {
    //     console.log(r.data.user);
    //   });
    // });
  }
  onMomentumScrollEnd(e){
    const offset = e.nativeEvent.contentOffset.y;
    const height = e.nativeEvent.contentSize.height - e.nativeEvent.layoutMeasurement.height;
    if (offset >= height) {
      this.onScrollToBottom();
    }
  }
  onScrollToBottom(){
    console.log('udah');
  }
  onScroll(){
    alert("TEST");
  }
  klikMenu(e){
    if (e === 'logout') {
      this.props.dispatch({type:'LOGOUT'});
    }
  }
  render() {
    const menu = [
      { name: 'history', title: 'Riwayat', icon: require('../icons/active/clock.png') },
      { name: 'post', title: 'Postingan', icon: require('../icons/active/search.png') },
      { name: 'user', title: 'Karyawan', icon: require('../icons/active/user.png') },
      { name: 'absen', title: 'Absensi', icon: require('../icons/active/finger.png') },
      { name: 'test', title: 'Test', icon: require('../icons/active/id-card-1.png') },
      { name: 'calendar', title: 'Kalender', icon: require('../icons/active/calendar-dot.png') },
      { name: 'file', title: 'File Saya', icon: require('../icons/active/folder-4.png') },
      { name: 'logout', title: 'Keluar', icon: require('../icons/active/close.png') },
    ]
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 10 }}>
        {/* --- Search Bar --- */}
        <SearchBar />
        {/* --- Content --- */}
        <ScrollView showsVerticalScrollIndicator={false} onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}>
          {/* --- Header --- */}
          <Row style={St.my1}>
            <Image source={require('../assets/images/bg_header_3.jpg')} style={{ width: '100%', height: 150, borderRadius: 10 }} />
          </Row>
          {/* --- MENU --- */}
          <Row style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {
              menu.map((r, key) => (
                <TouchableOpacity key={key} onPress={this.klikMenu.bind(this, r.name)} style={[St.m0, { width: '25%', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 20 }]}>
                  <View style={[St.bgSoftSuccess, St.rounded, {padding: 10}]}>
                    <Image source={r.icon} style={[St.same25]} />
                  </View>
                  <Text style={[St.f10, {marginTop: 5}]} numberOfLines={1}>{r.title}</Text>
                </TouchableOpacity>
              ))
            }
          </Row>
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Home)
