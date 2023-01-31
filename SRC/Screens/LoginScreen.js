import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, { useState } from 'react';
import MainButton from '../Components/CUSTOMS/Button/MainButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import auth from 'firebase/auth'

export default function LoginScreen() {
  const [Mobile, setMobile]=useState('');
  const [confirm, setconfirm] = useState(null);

  const signInWithPhoneNumber =async () => {
    const confirmation = await auth().signInWithPhoneNumber('+91' + Mobile);
    console.log(confirmation);
    setconfirm(confirmation)
  }
  return (
    <View style={styles.mainComponent}>
      <View style={styles.secondComponent}>
        <View style={styles.bothView}>
          <View style={styles.icon}>
            <FontAwesome5 name="user" size={24} />
          </View>
          <View style={styles.view}>
            <TextInput placeholder="Email/Mobile No" keyboardType='number-pad' value={Mobile} onChangeText={txt =>
            setMobile(txt)} />
          </View>
        </View>
        <View style={styles.bothView}>
          <View style={styles.icon}>
            <FontAwesome5 name="lock" size={24} />
          </View>
          <View style={styles.view}>
            <TextInput placeholder="OTP" />
          </View>
        </View>
      </View>
      <View style={styles.login}>
        <MainButton style={{fontSize: 20}} onPress={()=> {
          signInWithPhoneNumber();
        }}>Login</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainComponent: {
    backgroundColor: '#ec407a',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondComponent: {
    backgroundColor: '#b2dfdb',
    height: 300,
    width: 350,
    borderRadius: 20,
    justifyContent: 'center',
  },
  bothView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: '#880e4f',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flexDirection: 'row',
    height: 50,
    width: 270,
    backgroundColor: '#660066',
    // borderRadius:7,
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  login: {
    height: 50,
    width: 150,
    backgroundColor: '#ffb300',
    borderRadius: 10,
    alignSelf: 'center',
    paddingTop: 11,
    paddingLeft: 48,
    marginTop: 30,
  },
});