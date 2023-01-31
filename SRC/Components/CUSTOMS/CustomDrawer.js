import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScreenName} from '../../Constant/ScreenConstant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CustomDrawer(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'purple'}}>
      <View style={{alignItems: 'center', marginTop: 45}}>
        <View
          style={{
            backgroundColor: 'purple',
            borderRadius: 50,
            alignItems: 'center',
            width: 120,
            height: 110,
          }}>
          <FontAwesome5 name="user" size={100} />
        </View>
        <Text style={{color: 'lightgray'}}>Muslim Matrimony</Text>
      </View>
      <TouchableOpacity
        style={[styles.component, {marginTop: 35}]}
        onPress={() => {
          props?.navigation.navigate(ScreenName.PROFILE_SCREEN);
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>🙍‍♂️ My Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.component}
        onPress={() => {
          props?.navigation.navigate(ScreenName.MYLOGIN_SCREEN);
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>🔍 Search Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.component}
        onPress={() => {
          props?.navigation.navigate(ScreenName.MYLOGIN_SCREEN);
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>📖 Marriege Guidelines</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    justifyContent: 'center',
    marginTop: 10,
    borderColor: 'pink',
    borderRadius: 1,
    paddingLeft: 10,
    height: 40,
  },
  text: {
    fontSize: 20,
    color: 'orange',
  },
});
