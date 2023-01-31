import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenName } from '../Constant/ScreenConstant';
import Home from '../Screens/Home/Home';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();

export default function AuthNavigation() {


  const [showSplashScreen, setshowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false)
    }, 2000)
  }, [])
  

  return <Stack.Navigator >
    { showSplashScreen ? <Stack.Screen name={ScreenName.SPLASH_SCREEN} component={SplashScreen} options={{headerShown:false}} /> : null}
        <Stack.Screen name={ScreenName.HOME_SCREEN} component={Home} options={{headerShown:false}} />
    </Stack.Navigator>;
}

const styles = StyleSheet.create({})