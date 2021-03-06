import React, { Component, Fragment } from 'react'
import { ScrollView, Text, View, ActivityIndicator, RefreshControl } from 'react-native'
import { Button, Divider, Icon, Image, Avatar } from 'react-native-elements'
import { Grid, Row, Col } from "react-native-easy-grid"
import St from '../../assets/styles/index'

// API
import axios from 'axios';
import con, {api} from '../../api/api';

class SearchBar extends Component {
  render() {
    return (
      <View style={[St.row, St.bgWhite, St.shadow1, St.left, St.py1]}>
        <View style={[St.px1, St.left, St.row, { flex: 1 }]}>
          <Text style={[St.fw700, St.mr1]}>rejajamil</Text>
          <Icon type='feather' name="chevron-down" size={18} color="#555" />
        </View>
        <View style={[St.px1]}>
          <Icon type='feather' name="settings" size={20} color="#555" />
        </View>
      </View>
    );
  }
}
class Profile extends Component {
  state = {
    loading: true,
    refresh: false,
    user:{},
    avatar:null
  }
  componentDidMount(){
    con.then(r => {
      axios.get(r.api+'/me', {headers:r.headers}).then(res => {
        console.log(res.data);
        const avatar = r.img+'/user/thumb/'+res.data.user.img[0].name;
        this.setState({user:res.data.user, loading: false, refresh: false, avatar});
      });
    });
  }
  onRefresh(){
    this.setState({ refresh:true, user:{}, avatar:null }, this.componentDidMount);
  }
  loadMore(e){
    const offset = e.nativeEvent.contentOffset.y;
    const height = e.nativeEvent.contentSize.height - e.nativeEvent.layoutMeasurement.height;
    if (offset >= height) {
      console.log("Udah paling bawah coeg");
    }else {
      console.log("Belum Paraaaaat coeg");
    }
  }
  render() {
    if (this.state.loading) {
      return (
        <Grid>
          <Row style={[St.center]}>
            <Col>
              <ActivityIndicator size={50} color="#ddd" animating={true} />
            </Col>
          </Row>
        </Grid>
      )
    }
    return (
      <Grid>
        <View style={{ flex: 1 }}>
          {/* <Header /> */}
          <SearchBar />
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={this.state.refresh} onRefresh={this.onRefresh.bind(this)} />}
            onMomentumScrollEnd={this.loadMore.bind(this)}
          >
            {/* Image */}
            <View style={[St.row, St.center, St.px2, St.pb1, St.pt2]}>
              <Col>
                <Avatar rounded resizeMode="contain" source={{ uri: this.state.avatar }} size={75} renderPlaceholderContent={<ActivityIndicator color="#ddd" size={15} />} placeholderStyle={[St.bgLightGrey]} />
              </Col>
              <Col size={2}>
                <Row style={[St.center]}>
                  <Col>
                    <Text style={[St.f18, St.textCenter]}><Text style={[St.bold]}>7</Text>/10</Text>
                    <Text style={[St.f12, St.textCenter]}>Peringkats</Text>
                  </Col>
                  <Col>
                    <Text style={[St.f18, St.bold, St.textCenter]}>1x</Text>
                    <Text style={[St.f12, St.textCenter]}>Absen</Text>
                  </Col>
                  <Col>
                    <Text style={[St.f18, St.bold, St.textCenter]}>75%</Text>
                    <Text style={[St.f12, St.textCenter]}>Revenue</Text>
                  </Col>
                </Row>
              </Col>
            </View>
            {/* Biodata */}
            <View style={[St.row, St.px1, St.pb1]}>
              <Col style={[St.left]}>
                <Text style={[St.f16, St.fw700]}>{this.state.user.name}</Text>
                <Text style={[St.f14, St.fw100, St.fMuted]}>{this.state.user.username}</Text>
                {/* <Text style={[St.f14, St.fw100]}>{this.state.user.alamat} </Text> */}
                <Text style={[St.f13, St.fw100, St.fPrimary]}>{this.state.user.alamat} </Text>
              </Col>
            </View>
            {/* Button Action */}
            <View style={[St.row, St.center, St.pb1]}>
              <Col style={[St.px1]}>
                <Button
                  titleStyle={[St.f13, St.fGrayDark]}
                  buttonStyle={[St.borderGrayDark, St.bgWhite, St.shadow1, {padding: 5}]}
                  // icon={ <Icon type='ionicon' name="gear" size={15} color="blue" solid containerStyle={{ iconStyle:10 }} /> }
                  type="outline" title="Pengaturan Akun"
                  onPress={() => alert('Simple Button pressed')} />
              </Col>
              <Col>
                <Button
                  titleStyle={[St.f13, St.fGrayDark]}
                  buttonStyle={[St.borderGrayDark, St.bgWhite, St.shadow1, {padding: 5}]}
                  // icon={ <Icon type='ionicon' name="gear" size={15} color="blue" solid containerStyle={{ iconStyle:10 }} /> }
                  type="outline" title="Pengaturan Akun"
                  onPress={() => alert('Simple Button pressed')} />
              </Col>
              <Col style={[St.px1]}>
                <Button
                  titleStyle={[St.f13, St.fGrayDark]}
                  buttonStyle={[St.borderGrayDark, St.bgWhite, St.shadow1, {padding: 5}]}
                  // icon={ <Icon type='ionicon' name="gear" size={15} color="blue" solid containerStyle={{ iconStyle:10 }} /> }
                  type="outline" title="Pengaturan Akun"
                  onPress={() => alert('Simple Button pressed')} />
              </Col>
            </View>
            {/* Story */}
            <View style={[St.row, St.px1, St.py1]}>
              <Col style={[St.center, St.same50]}>
                <View style={[St.same50, St.rounded, St.center, St.border1, St.borderGray]}>
                  <Icon type='ionicon' name="ios-add" size={30} color="#aaa" solid />
                </View>
              </Col>
              {
                (Object.values(this.state.user).length ? this.state.user.img.splice(0,2) : [1,2,3]).map((r, key) => (
                  <Col style={[St.center, St.same50, St.border1, St.borderGray, St.rounded, St.ml1]} key={key}>
                    <Avatar rounded size={50} resizeMode="contain" source={{ uri: `${api.img}/user/thumb/${r.name}` }} renderPlaceholderContent={<ActivityIndicator color="#ddd" size={15} />} placeholderStyle={[St.bgLightGrey]} />
                  </Col>
                ))
              }
              {/* <Col style={[St.center, St.same50, St.border1, St.borderGray, St.rounded, St.ml1]}>
                <Avatar rounded size={50} resizeMode="contain" source={{ uri: 'https://i.pravatar.cc/100?img=2' }} renderPlaceholderContent={<ActivityIndicator color="#ddd" size={15} />} placeholderStyle={[St.bgLightGrey]} />
              </Col> */}
            </View>
            {/* View Style */}
            <View style={[St.row]}>
              <Col style={[St.center, St.py1, St.borderTop, St.borderGray, {borderBottomWidth: 2, borderBottomColor: 'black'}]}>
                <Icon type='feather' name="grid" size={20} color="black" />
              </Col>
              <Col style={[St.center, St.py1, St.borderTop, St.borderGray]}>
                <Icon type='feather' name="list" size={20} color="#bbb" />
              </Col>
            </View>
            {/* Gallery */}
            <Row style={[St.wrap, St.pb1]}>
              {
                (Object.values(this.state.user).length ? this.state.user.img : [1,2,3]).map((r, key) => (
                  <Col key={key} style={[St.m0, { width: '33.33333%', marginTop: 1 }]} onPress={() => alert('Hello World')}>
                    <Image resizeMode='cover' progressiveRenderingEnabled source={{ uri: `${api.img}/user/thumb/${r.name}` }} style={{ width: 120, height: 120 }} PlaceholderContent={<ActivityIndicator color="#ddd" size={15} />} placeholderStyle={[St.bgLightGrey]} />
                  </Col>
                ))
              }
            </Row>
          </ScrollView>
        </View>
      </Grid>
    );
  }
}

export default Profile
