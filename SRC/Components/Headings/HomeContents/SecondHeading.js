import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import MainButton from '../../CUSTOMS/Button/MainButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenName } from '../../../Constant/ScreenConstant';

export default function SecondHeading() {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
                style={{justifyContent: 'center', height: 710}}
                source={require('../../../Images/river.jpg')}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>
            Free Indian Muslim Matromony{'\n'}(Non-Profit)
          </Text>
          <Text style={[styles.text, {fontWeight:'bold'}]}>______________</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:32,justifyContent:'space-evenly'}}>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <View style={styles.Search}>
          <MainButton style={{color:'white'}} onPress={() => {
            navigation.navigate(ScreenName.CREATE_PROFILE)
          }}>🔍 SEARCH PROFILES</MainButton>
          </View>
          <View style={styles.Login}>
          <MainButton style={{color:'white'}} onPress={() => {
            navigation.navigate(ScreenName.MYLOGIN_SCREEN)
          }}>▶ LOGIN</MainButton>
          </View>
          </View>
          </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#FDF5DC'
      },
      Search: {
        height: 35,
        width: 170,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      Login: {
        height: 33.5,
        width: 100,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
})