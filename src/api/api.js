import AsyncStorage from '@react-native-community/async-storage'
export const api = {
  api: `http://192.168.1.4/api-karyawan/client`,
  img: `http://192.168.1.4/api-karyawan/public/img`,
  headers:{Authorization:'Bearer token', Accept: 'application/json'}
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user')
    const json = JSON.parse(jsonValue != {} ? jsonValue : {});
    const headers = {headers: {Authorization:`Bearer ${json.api_token}`, Accept: 'application/json'}};
    return Object.assign(api, json, headers);
  } catch(e) {
    // error reading value
  }
}

export default getData();


// export default {
//   api: 'http://192.168.1.4/api-karyawan/client',
//   img: 'http://192.168.1.4/api-karyawan/public/img',
//   // user:user,
//   token:'sugihart',
//   headers:{Authorization:'Bearer sugihart', Accept: 'application/json'}
// }
