import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React from 'react';

export default function SplashScreen() {
  return (
    <View
      style={{
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="gray" barStyle="light-content" />
      <View></View>
      <View>
        <Image style={styles.img} source={require('../Images/Splash.jpg')} />
        <Text style={{textAlign: 'center', color: 'lightblue'}}>
          {' '}
          IndiaNikah.com{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 265,
    width: 250,
    justifyContent: 'center',
    borderRadius: 20,
  },
});
