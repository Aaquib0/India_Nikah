import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import react, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [text, setText] = useState('');
  const [savedtext, setSavedText] = useState('');

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('TEXT', text);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('TEXT');
      if (value !== null) {
        setSavedText(value);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput
        onChangeText={txt => setText(txt)}
        style={{
          width: '80%',
          height: 70,
          backgroundColor: 'green',
          borderRadius: 13,
          paddingHorizontal: 20,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          storeData();
        }}
        style={{
          width: 200,
          height: 70,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 30,
        }}>
        <Text style={{color: '#fff'}}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          getData();
        }}
        style={{
          width: 200,
          height: 70,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 50,
        }}>
        <Text style={{color: '#fff'}}>Display Value</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 20}}>{'Save Text :' + savedtext}</Text>
    </View>
  );
}

const style = StyleSheet.create({});
