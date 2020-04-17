import React, { Component, Fragment } from 'react'
import { ScrollView, Text, Image, View, ActivityIndicator, RefreshControl } from 'react-native'
import { Button, Divider, Icon } from 'react-native-elements'
import { Grid, Row, Col } from "react-native-easy-grid"
import St from '../../assets/styles/index'
import Avatar from '../../assets/images/maintenance.svg'

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
export default class Profile extends Component {
  state = {
    loading: true,
    refresh: false
  }
  componentDidMount() {
    this.setState({ loading:false });
  }
  onRefresh(){
    this.setState({ refresh:true });
    new Promise(resolve => setTimeout(resolve, 2000)).then(() => this.setState({ refresh:false }));
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
              <ActivityIndicator size={50} color="#eee" animating={true} />
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
                <Image resizeMode="cover" source={{ uri: 'https://i.pravatar.cc/300' }} style={[St.same75, St.rounded]} />
              </Col>
              <Col size={2}>
                <Row style={[St.center]}>
                  <Col>
                    <Text style={[St.f20, St.textCenter]}><Text style={[St.bold]}>7</Text>/10</Text>
                    <Text style={[St.f12, St.textCenter]}>Peringkats</Text>
                  </Col>
                  <Col>
                    <Text style={[St.f20, St.bold, St.textCenter]}>1x</Text>
                    <Text style={[St.f12, St.textCenter]}>Absen</Text>
                  </Col>
                  <Col>
                    <Text style={[St.f20, St.bold, St.textCenter]}>75%</Text>
                    <Text style={[St.f12, St.textCenter]}>Revenue</Text>
                  </Col>
                </Row>
              </Col>
            </View>
            {/* Biodata */}
            <View style={[St.row, St.px1, St.pb1]}>
              <Col style={[St.left]}>
                <Text style={[St.f16, St.fw700]}>Reja Jamil</Text>
                <Text style={[St.f14, St.fw100, St.fMuted]}>rejajamil</Text>
                <Text style={[St.f14, St.fw100]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quisquam? </Text>
                <Text style={[St.f13, St.fw100, St.fPrimary]}>Jl. Selat Makasar G2 No. 8, RT 03 RW 17, KAV TNI AL. KOTA JAKARTA TIMUR - DUREN SAWIT </Text>
                <Text style={[St.f13, St.fw100, St.fPrimary]}>DKI JAKARTA 13440 </Text>
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
              <Col style={[St.center, St.same60]}>
                <View style={[St.same50, St.rounded, St.center, St.border1, St.borderMuted]}>
                  <Icon type='ionicon' name="ios-add" size={30} color="#aaa" solid />
                </View>
              </Col>
              <Col style={[St.center, St.same60, St.border1, St.borderMuted, St.rounded, St.ml1]}>
                <Image resizeMode="cover" source={{ uri: 'https://i.pravatar.cc/100?img=1' }} style={[St.same50, St.rounded]} />
              </Col>
              <Col style={[St.center, St.same60, St.border1, St.borderMuted, St.rounded, St.ml1]}>
                <Image resizeMode="cover" source={{ uri: 'https://i.pravatar.cc/100?img=2' }} style={[St.same50, St.rounded]} />
              </Col>
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
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(key => (
                  <View key={key} style={{ width: '33.33333%', alignItems: 'center', justifyContent: 'flex-start', marginTop: 1 }}>
                    <View style={{  }}>
                      <Image progressiveRenderingEnabled source={{ uri: `https://i.pravatar.cc/200?img=${key}` }} style={{ width: 119, height: 119 }} defaultSource={<ActivityIndicator />} />
                    </View>
                  </View>
                ))
              }
            </Row>
          </ScrollView>
        </View>
      </Grid>
    );
  }
}
