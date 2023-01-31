import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import MainHeading from '../../Components/Headings/HomeContents/MainHeading';
import SecondHeading from '../../Components/Headings/HomeContents/SecondHeading';
import Paragraph from '../../Components/Headings/HomeContents/Paragraph';
import LastPage from '../../Components/Headings/HomeContents/LastPage';

const flatlist = [{}];

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <MainHeading />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={flatlist}
        renderItem={() => {
          return (
            <View>
              <SecondHeading />
              <Paragraph />
              <LastPage />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
