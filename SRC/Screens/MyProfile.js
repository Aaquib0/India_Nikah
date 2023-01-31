import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation} from '@react-navigation/native';
import MainHeading from '../Components/Headings/HomeContents/MainHeading';

export default function MyProfile() {
  const navigation = useNavigation();

  let db = openDatabase({name: 'UserDatabase2.db'});

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [contact, setcontact] = useState('');
  const [city, setcity] = useState('');

  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(50), user_contact INT(10))',
              [],
            );
          } else {
            console.log('already created table');
          }
        },
      );
    });
  }, []);

  const saveData = () => {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO table_user(user_name, user_email, user_contact) VALUES (?,?,?)',
        [name, email, contact],
        (txt, res) => {
          if (res.rowsAffected == 1) {
            navigation.goBack();
          } else {
            console.log(res);
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  return (
    <View style={styles.mainContainer}>
      <MainHeading />
      <ScrollView>
        <View style={styles.headingView}>
          <Text style={styles.headingText}>PERSONAL DETAILS</Text>
          <Text style={[styles.headingText, {fontSize: 13.5, fontWeight: '0'}]}>
            Tell us something more about you
          </Text>
        </View>
        <View style={{}}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={name}
            onChangeText={txt => setname(txt)}
          />
          <TextInput
            style={[styles.textInput, {marginTop: 15}]}
            placeholder="Email"
            value={email}
            onChangeText={txt => setemail(txt)}
          />
          <TextInput
            style={[styles.textInput, {marginTop: 15}]}
            placeholder="contact"
            maxLength={10}
            keyboardType="number-pad"
            value={contact}
            onChangeText={txt => setcontact(txt)}
          />
          <TextInput
            placeholder="Age"
            style={[styles.textInput, {marginTop:15}]}
            onChangeText={txt => setcity(txt)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              saveData();
            }}>
            <Text style={styles.buttonText}>Save User</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  headingView: {
    height: 50,
    marginTop: 18,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  headingText: {
    color: 'black',
    fontSize: 18.5,
    fontWeight: '800',
    textAlign: 'center',
  },
  textInput: {
    height: 50,
    width: '85%',
    backgroundColor: 'blue',
    paddingLeft: 15,
    borderRadius: 8,
    alignSelf: 'center',
    color: 'yellow',
  },
  button: {
    height: 45,
    width: '38%',
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 25,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'green',
    fontSize: 17,
    fontWeight: '700',
  },
});
