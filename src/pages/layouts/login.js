import React, {Component, Fragment} from 'react'
// NETWORK
import { connect } from 'react-redux'
import axios from 'axios';
import con from '../../api/api';
// EL
import { Text, StatusBar, Image, TextInput, Keyboard } from 'react-native'
import { Button, Divider, Icon } from 'react-native-elements'
import { Row, Col } from 'react-native-easy-grid'
// STYLE
import St from '../../assets/styles/index'
import Co from '../../assets/styles/colors'

class Login extends Component {
  state = {
    loading:false
  }
  // onChangeText(name, e){
  //   this.setState({[name]:e});
  // }
  onSubmitEditing(){
    Keyboard.dismiss();
    this.setState({ loading:true });
    const q = {};
    q['username'] = this.props.username;
    q['password'] = this.props.password;
    axios.post(con.api + '/admin/login',q).then(res => {
      if (res.data.id) {
        this.props.handleLogin(res.data);
      }else {
        this.props.handleMessage(res.data.message);
        this.setState({ loading:false });
      }
    }).catch(err => {
      this.props.handleMessage('Terjadi kesalahan atau koneksi bermasalah.');
      this.setState({ loading:false });
    });
  }
  render(){
    return(
      <Fragment>
        <Row size={5} style={[St.center, St.bgWhite]}>
          <Text style={[St.fMuted, St.f12, St.mr1]}>Bahasa Indonesia</Text>
          <Icon type='feather' name="chevron-down" size={12} color="#555" />
        </Row>
        <Row size={90} style={[St.center, St.bgWhite]}>
          <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
          <Col style={[St.px4]}>
            <Row style={[St.center, St.px5, {height:80, opacity:.9}]}>
              <Image source={require('../../icons/brands/instagram.png')} resizeMode='contain' style={{width:'100%'}} />
            </Row>
            <Row style={[St.center, St.bgLightGrey, St.px1, St.border1, St.borderGray, St.radius1, St.mb1, {height:40}]}>
              <Col>
                <Image source={require('../../icons/active/user.png')} style={[{ width: 20, height: 20 }]} />
              </Col>
              <Col size={10}>
                <TextInput placeholder='Username atau email' autoCompleteType="off" autoCapitalize="none" onChangeText={e => this.props.handleUsername(e)} onSubmitEditing={this.onSubmitEditing.bind(this)} style={[St.px1, St.f13]} />
              </Col>
            </Row>
            <Row style={[St.center, St.bgLightGrey, St.px1, St.border1, St.borderGray, St.radius1, St.mb1, {height:40}]}>
              <Col>
                <Image source={require('../../icons/active/lock.png')} style={[{ width: 20, height: 20 }]} />
              </Col>
              <Col size={10}>
                <TextInput secureTextEntry placeholder='Password' autoCompleteType="off" autoCapitalize="none" onChangeText={e => this.props.handlePassword(e)} onSubmitEditing={this.onSubmitEditing.bind(this)} style={[St.px1, St.f13]} />
              </Col>
            </Row>
            <Button  title="Log in" buttonStyle={[St.radius1]} titleStyle={[St.f13]} onPress={this.onSubmitEditing.bind(this)} />
            <Row style={[St.center, {height:50}]}>
              <Text style={[St.f12, St.fMuted, St.mr1]}>Lupa Password ?</Text>
              <Text style={[St.f12, St.fw700, St.fLink]}>Email Confirm</Text>
            </Row>
            <Row style={[St.center, {height:30}]}>
              <Col size={2} style={[St.borderLight, St.border1]} />
              <Col size={1} style={[St.px1]}>
                <Text numberOfLines={1} style={[St.f12, St.fMuted, St.textCenter]}>ATAU</Text>
              </Col>
              <Col size={2} style={[St.borderLight, St.border1]} />
            </Row>
            <Row style={[St.center, {height:50}]}>
              <Image source={require('../../icons/brands/facebook.png')} resizeMode='contain' style={[St.mr1, {width: 20}]} />
              <Text numberOfLines={1} style={[St.f12, St.fGray, St.textLeft, St.fw700]}>Login facebook</Text>
              <Col style={[St.w25]} />
              <Image source={require('../../icons/brands/gmail.png')} resizeMode='contain' style={[St.mr1, {width: 20}]} />
              <Text numberOfLines={1} style={[St.f12, St.fGray, St.textLeft, St.fw700]}>Login Email</Text>
            </Row>
          </Col>
        </Row>
        <Row size={5} style={[St.center, St.bgWhite, St.borderTop, St.borderGray, St.py1]}>
          <Text style={[St.f12, St.fMuted, St.mr1]}>Belum punya akun ?</Text>
          <Text style={[St.f12, St.fw700, St.fLink]}>Sign up</Text>
        </Row>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    username:state.username,
    password:state.password,
    auth:state.auth,
    message:state.message,
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleUsername: (e) => dispatch({type:'USERNAME', value:e}),
    handlePassword: (e) => dispatch({type:'PASSWORD', value:e}),
    handleLogin: (e) => dispatch({type:'LOGIN', value:e}),
    handleMessage: (e) => dispatch({type:'MESSAGE', value:e})
  }
}
export default connect(mapState, mapDispatch)(Login)
