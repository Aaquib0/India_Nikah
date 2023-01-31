import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Linking,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {ScreenName} from '../../../Constant/ScreenConstant';
import {useNavigation} from '@react-navigation/native';

export default function LastPage() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#3d3d0d', flex: 1}}>
      <View style={styles.mainComponents}>
        <Image
          style={{height: 42, width: 42}}
          source={require('../../../Images/Heart.png')}
        />
        <View>
          <Text style={{fontWeight: 'bold', color: 'white'}}>India Nikah</Text>
          <Text style={{fontSize: 8.5, color: 'white'}}>
            India's Free Muslim Matrimony
          </Text>
        </View>
      </View>
      <Text style={styles.line}>_________</Text>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            Disclaimer :{' '}
          </Text>
          indianikah.com is a non-profit matrimony
        </Text>
        <Text style={{marginTop: 2}}>
          website and not for anything else apart from marriage
        </Text>
        <Text style={{marginTop: 2}}>
          match making. it is not directly or indirectly responsible
        </Text>
        <Text style={{marginTop: 2}}>
          for any sort of misuse of data done from the site. The
        </Text>
        <Text style={{marginTop: 2}}>
          data on the site is not shared with any entity.
        </Text>
      </View>
      <Text style={styles.name}>USEFUL LINKS</Text>
      <Text style={styles.line}>_________</Text>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ScreenName.PROFILE_SCREEN);
          }}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome name="user" color="white" size={20} />
            <Text style={[styles.link, {marginTop: 0}]}> My Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome
              name="search"
              color="white"
              size={20}
              style={{marginTop: 13}}
            />
            <Text style={styles.link}> Search Profiles</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Feather
              name="book-open"
              color="white"
              size={20}
              style={{marginTop: 13}}
            />
            <Text style={styles.link}> Marriage Guidelines</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome
              name="lock"
              color="white"
              size={20}
              style={{marginTop: 13}}
            />
            <Text style={styles.link}> Privacy Policy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome
              name="pencil"
              color="white"
              size={20}
              style={{marginTop: 13}}
            />
            <Text style={styles.link}> Terms & Conditions</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>CONTACTS</Text>
      <Text style={styles.line}>_________</Text>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Text style={{color: 'white'}}>contact@indianikah.com</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10,
        }}>
        <TouchableOpacity>
          <FontAwesome name="whatsapp" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="telegram" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/search/top/?q=India%20Nikah')}>
          <AntDesign name="facebook-square" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.indianikah.com/')
          }>
          <AntDesign name="google" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.youtube.com/@IndiaNikah')
          }>
          <AntDesign name="youtube" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', paddingTop: 10, marginBottom: 67}}>
        <Text>( We are on above social media )</Text>
      </View>
      <View
        style={{
          backgroundColor: '#666640',
          height: 52,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign name="copyright" />
        <Text>2022 copyright : </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            www.indiannikah.com
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainComponents: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 76.5,
    justifyContent: 'center',
    marginTop: 27,
  },
  text: {
    textAlign: 'center',
    // color: 'white',
  },
  line: {
    textAlign: 'center',
    marginBottom: 11,
    color: '#483d8b',
  },
  link: {
    marginTop: 13,
    color: 'white',
    fontSize: 14,
  },
  name: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 49,
  },
  buttonicon: {
    flexDirection: 'row',
  },
});
