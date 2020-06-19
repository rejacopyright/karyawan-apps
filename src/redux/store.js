import { createStore } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
// Init State
const init = {
  username:null,
  password:null,
  auth:false,
  user:[],
  message:null,
  setting:{},
  search:''
}
// Reducer
const reducer = (state = init, action) => {
  if (action.type === 'USERNAME') {
    return {...state, username: action.value}
  }
  if (action.type === 'PASSWORD') {
    return {...state, password: action.value}
  }
  if (action.type === 'MESSAGE') {
    return {...state, message: action.value}
  }
  if (action.type === 'LOGIN') {
    let user = action.value;
    AsyncStorage.multiSet([['user', JSON.stringify(user)], ['auth', 'true']]);
    return {...state, auth: true, user:user}
  }
  if (action.type === 'LOGOUT') {
    AsyncStorage.multiRemove(['user', 'auth']);
    return {state:init};
  }
  if (action.type === 'SETTING_NAME') {
    return {...state, setting: {...state.setting, name: action.value}}
  }
  if (action.type === 'SEARCH') {
    return {...state, search: action.value}
  }
  return state;
}
// Store
const store = createStore(reducer);
export default store;
