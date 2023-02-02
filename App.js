import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{alignSelf:'center',backgroundColor:'red'}}>
      <View>
        <TouchableOpacity
          style={{
            width: 50,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: 'pink',
              borderRadius: 30,
            }}>
            <Entypo name="plus" size={60} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: 100,
          width: '100%',
          // position:'absolute',
          // bottom:0
        }}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            source={require('./SRC/Images/Splash.jpg')}
            style={{height: 60, width: 60}}
          />
          <Text style={{color: '#000'}}>Splash</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./SRC/Images/Light.jpg')}
            style={{height: 60, width: 60}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
