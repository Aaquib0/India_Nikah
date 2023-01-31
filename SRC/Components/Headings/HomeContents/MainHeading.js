import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../../Constant/ScreenConstant';
import Feather from 'react-native-vector-icons/Feather';

export default function MainHeading() {
  const navigation = useNavigation();
  return (
    <View
      style={styles.mainComponents}>
        <StatusBar backgroundColor="lightblue" barStyle="light-content" />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight:10}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Feather name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Image
          style={{height: 41, width: 41,}}
          source={require('../../../Images/Heart.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: '800',}}>India Nikah</Text>
          <Text style={{fontSize: 7}}>India's Free Muslim Matrimony</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.myProfile}
          onPress={() => {
            navigation.navigate(ScreenName.CREATE_PROFILE);
          }}>
          <Text style={styles.profileText}>🙍‍♂️My Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainComponents: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#CD6155',
      height: 115,
      justifyContent: 'space-between',
      paddingTop: 33,
      paddingLeft: 10,
      paddingRight: 10,
  },
  myProfile: {
    backgroundColor: '#F2D7D5',
    justifyContent: 'center',
    height: 35,
    width: 100,
    alignItems: 'center',
    borderRadius: 7,
  },
  profileText: {
    fontStyle: 'normal',
    fontSize: 15,
    color: 'red',
  },
});

// return (
//   <View style={styles.mainComponents}>
//     <TouchableOpacity
//       style={{
//         justifyContent: 'flex-end',
//         paddingVertical: 15,
//         marginHorizontal: 9,
//       }}
//       onPress={() => {
//         navigation.openDrawer();
//       }}>
//       <Feather name="menu" size={28} color="black" />
//     </TouchableOpacity>
//     <View style={{justifyContent: 'flex-end', paddingBottom: 8}}>
//       <Image
//         style={{height: 41, width: 41}}
//         source={require('../../../Images/Heart.png')}
//       />
//     </View>
//     <View style={{justifyContent: 'flex-end', paddingBottom: 12.5}}>
//       <Text style={{fontWeight: 'bold'}}>India Nikah</Text>
//       <Text style={{fontSize: 9}}>India's Free Muslim Matrimony</Text>
//     </View>
//     <View style={{justifyContent:'center',marginLeft:'18%',marginVertical:'14.6%'}}>
//       <TouchableOpacity
//         style={styles.myProfile}
//         onPress={() => {
//           navigation.navigate(ScreenName.CREATE_PROFILE);
//         }}>
//         <Text style={styles.profileText}>🙍‍♂️My Profile</Text>
//       </TouchableOpacity>
//       </View>
//   </View>
