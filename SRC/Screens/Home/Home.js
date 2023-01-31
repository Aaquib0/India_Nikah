import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import DrawerNavigator from '../../Navigation/DrawerNavigator';


export default function Home() {
  return (
    <View style={{flex:1}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
        <DrawerNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({});
