import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function MainButton(props) {
  return (
    <View>
        <TouchableOpacity 
         onPress={() => {
            props?.onPress?.();
        }}
        // onPress={ demo (){
        //   props?.onPress?.();
        // }
// }
>
      <Text style={{...styles.button, ...props.style}}> {props?.children} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
    }
})