import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
// import Routes from './SRC/Navigation/Routes'
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection:'row'}}>
      <View
        style={{
          width: responsiveWidth(20),
          height: responsiveWidth(20),
          borderRadius:responsiveWidth(10),
          backgroundColor: 'green',
          marginLeft:responsiveWidth(5)
        }}></View>
        <View
        style={{
          width: responsiveWidth(20),
          height: responsiveWidth(20),
          borderRadius:responsiveWidth(10),
          backgroundColor: 'green',
          marginLeft:responsiveWidth(5)
        }}></View>
        <View
        style={{
          width: responsiveWidth(20),
          height: responsiveWidth(20),
          borderRadius:responsiveWidth(10),
          backgroundColor: 'green',
          marginLeft:responsiveWidth(5)
        }}></View>
        <View
        style={{
          width: responsiveWidth(20),
          height: responsiveWidth(20),
          borderRadius:responsiveWidth(10),
          backgroundColor: 'green',
          marginLeft:responsiveWidth(5)
        }}></View>
        <View
        style={{
          width: responsiveWidth(20),
          height: responsiveWidth(20),
          borderRadius:responsiveWidth(10),
          backgroundColor: 'green',
          marginLeft:responsiveWidth(5)
        }}></View>
        <View
        style={{
          width: responsiveWidth(20),
          height: responsiveWidth(20),
          borderRadius:responsiveWidth(10),
          backgroundColor: 'green',
          marginLeft:responsiveWidth(5)
        }}></View>
        </View>
      <TouchableOpacity
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(10),
          backgroundColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: responsiveWidth(4),
        }}>
        <Text style={{color: '#fff', fontSize: responsiveFontSize(3)}}>
          Touch Me
        </Text>
      </TouchableOpacity>
      <Image
        resizeMode="contain"
        source={require('./SRC/Images/Drawer.png')}
        style={{width: responsiveWidth(20), height: responsiveHeight(20)}}
      />
      <Text
        style={{
          fontSize: responsiveFontSize(2.5),
          marginTop: responsiveHeight(10),
        }}>
        Donate: If you use this site regularly and would like to help keep the
        site on the Internet, please consider donating a small sum to help pay
        for the hosting and bandwidth bill. There is no minimum donation, any
        sum is appreciated - click here to donate using PayPal. Thank you for
        your support.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
