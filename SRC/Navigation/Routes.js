import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

export default function Routes() {
  
  return <NavigationContainer>
      <AuthNavigator/>
  </NavigationContainer>;
}

const styles = StyleSheet.create({})