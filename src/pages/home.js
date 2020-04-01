/* @flow */

import React, { Component, Fragment } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image } from 'react-native';

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
          <Image source={require('../icons/active/layers.png')} style={{ width: 25, height: 25, position: 'absolute', top: '25%', left: 15 }} />
        </View>
      </View>
    );
  }
}
export default class Home extends Component {
  render() {
    const menu = [
      { name: 'Daftar', icon: require('../icons/menu/add-2.png') },
      { name: 'Postingan', icon: require('../icons/menu/layers.png') },
      { name: 'Karyawan', icon: require('../icons/menu/user-4.png') },
      { name: 'Absensi', icon: require('../icons/menu/success.png') },
      { name: 'History', icon: require('../icons/menu/clock-1.png') },
      { name: 'Kalender', icon: require('../icons/menu/calendar-3.png') },
      { name: 'Task List', icon: require('../icons/menu/list.png') },
      { name: 'File Saya', icon: require('../icons/menu/folder-11.png') },
    ]
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 10 }}>
        {/* --- Search Bar --- */}
        <SearchBar />
        {/* --- Content --- */}
        <ScrollView showsVerticalScrollIndicator={false} onScroll={this.onScroll}>
          {/* --- Header --- */}
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Image source={require('../assets/images/bg_header_1.jpg')} style={{ width: '100%', height: 125, borderRadius: 10 }} />
          </View>
          {/* --- MENU --- */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginHorizontal: -15 }}>
            {
              menu.map((r, key) => (
                <View key={key} style={{ width: '25%', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 20 }}>
                  <View style={{ borderWidth: 2, borderColor: '#eee', borderRadius: 15, padding: 10, marginBottom: 5 }}>
                    <Image source={r.icon} style={{ width: 35, height: 35 }} />
                  </View>
                  <Text style={{ textAlign: 'center' }} numberOfLines={1}>{r.name}</Text>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}
