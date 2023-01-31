import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';
import {ScreenName} from '../../Constant/ScreenConstant';

let db = openDatabase({name: 'UserDatabase2.db'});
const CreateProfile = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setUserList(temp);
      });
    });
  };
  let deleteUser = id => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    getData();
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Please insert a valid User Id');
          }
        },
      );
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.userItem}>
              <Text style={styles.itemText}>{'Name: ' + item.user_name}</Text>
              <Text style={styles.itemText}>{'Email: ' + item.user_email}</Text>
              <Text style={styles.itemText}>{'Contact: ' + item.user_contact}</Text>
              <View style={styles.belowView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(ScreenName.UPDATE_USER, {
                      data: {
                        name: item.user_name,
                        email: item.user_email,
                        number: item.user_contact,
                        id: item.user_id,
                      },
                    });
                  }}>
                  <Text style={styles.delUpdbtn}>UPDATE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleteUser(item.user_id);
                  }}>
                  <Text style={styles.delUpdbtn}>DELETE</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={styles.addNewBtn}
        onPress={() => {
          navigation.navigate(ScreenName.PROFILE_SCREEN);
        }}>
        <Text style={styles.btnText}>Add New User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addNewBtn: {
    backgroundColor: 'purple',
    width: 150,
    height: 50,
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#f5b7b1',
    fontSize: 18,
  },
  userItem: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  belowView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    height: 50,
  },
  icons: {
    width: 24,
    height: 24,
  },
  delUpdbtn:{
    color:'#884ea0',
    fontWeight:'600'
  }
});

// import {FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import MainButton from '../../Components/CUSTOMS/Button/MainButton';
// import {ScreenName} from '../../Constant/ScreenConstant';
// import {useIsFocused, useNavigation} from '@react-navigation/native';
// import {openDatabase} from 'react-native-sqlite-storage';

// let db = openDatabase({name: 'UserDatabase2.db'});

// export default function CreateProfile() {
//   const [userList, setuserList] = useState({});
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   useEffect(() => {
//     getData();
//   }, [isFocused]);
//   const getData = () => {
//     db.transaction(txn => {
//       txn.executeSql('SELECT * FROM table_user', [], (tx, res) => {
//         let temp = [];
//         for (let i = 0; i < res.rows.length; ++i) {
//           console.log(res.rows.item(i));
//           temp.push(res.rows.item(i));
//         }
//         setuserList(temp);
//       });
//     });
//   };
//   const deleteUser = id => {
//     db.transaction(txn => {
//       txn.executeSql(
//         'DELETE FROM  table_user where user_id=?,'[id],
//         (tx, res) => {
//           getData();
//         },
//       );
//     });
//   };

//   return (
//     <View style={{flex: 1}}>
//       <StatusBar backgroundColor="green" />
//       <FlatList
//         data={userList}
//         renderItem={({item, index}) => {
//           return (
//             <View style={{}}>
//               <TouchableOpacity
//                 style={{width: '100%', backgroundColor: 'white', padding: 10}}>
//                 <Text style={{color: 'red'}}>{'Name: ' + item.user_name} </Text>
//                 <Text style={{color: 'red'}}>
//                   {'Email: ' + item.user_email}{' '}
//                 </Text>
//                 <Text style={{color: 'red'}}>
//                   {'Number: ' + item.user_contact}{' '}
//                 </Text>
//               </TouchableOpacity>
//               <View style={styles.deleteUpdate}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate(ScreenName.UPDATE_USER, {
//                       data: {
//                         name: item.user_name,
//                         email: item.user_email,
//                         number: item.user_contact,
//                         id: item.user_id,
//                       },
//                     });
//                   }}>
//                   <Text style={{color: 'red'}}>Update</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => {
//                     deleteUser(item.user_id);
//                   }}>
//                   <Text style={{color: 'red'}}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           );
//         }}
//       />
//       <View style={{alignItems: 'flex-end', width: '95%'}}>
//         <View style={styles.createProfile}>
//           <MainButton
//             style={{color: 'yellow', fontSize: 19}}
//             onPress={() => {
//               navigation.navigate(ScreenName.PROFILE_SCREEN);
//             }}>
//             Create Profile
//           </MainButton>
//         </View>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   deleteUpdate: {
//     height: 50,
//     width: '100%',
//     backgroundColor: '#f2f2f2',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     flexDirection: 'row',
//     // marginTop: 10,
//   },
//   createProfile: {
//     backgroundColor: 'red',
//     height: 50,
//     justifyContent: 'center',
//     marginTop: 30,
//     borderRadius: 20,
//     position: 'relative',
//     marginBottom: 15,
//   },
// });
