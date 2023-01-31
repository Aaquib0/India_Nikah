import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [data, setdata] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onSelect = ind => {
    const tempData = [];
    data.map((item, index) => {
      if (index == ind) {
        if (item==true){
          tempData.push(false)
        } else{
            tempData.push(true)
          }
      } else {
        if (item==true){
          tempData.push(true)
        } else{
            tempData.push(false)
          }
      }
    });
    setdata(tempData);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '100%',
                height: 70,
                borderColor: '#8e8e8e',
                borderWidth: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: item == true ? 5 : 1,
                backgroundColor:item==true ? 'blue': 'green',
                borderColor:item==true ? 'blue' : 'pink'
              }}
              onPress={() => {
                onSelect(index);
              }}>
              <Text style={{fontSize: 30, color: 'black', color:item==true ? 'yellow' : 'red'}}>
                {'item ' + (index + 1)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
