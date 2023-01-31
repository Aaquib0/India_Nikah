import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation, useRoute} from '@react-navigation/native';

let db = openDatabase({name: 'UserDatabase2.db'});

export default function UpdateUser() {
  const navigation = useNavigation();
  const route = useRoute();

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [contact, setcontact] = useState('');

  useEffect(() => {
    setname(route.params.data.name);
    setemail(route.params.data.email);
    setcontact(route.params.data.contact);
  }, []);

  const updateData = () => {
    db.transaction(txn => {
      txn.executeSql(
        'UPDATE table_user set user_name=?, user_email=? , user_contact=? where user_id=?',
        [name, email, contact, route.params.data.id],
        (tx, res) => {
          navigation.goBack();
        },
      );
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textInput}>
        <TextInput
          style={{color: 'yellow'}}
          placeholder="Name"
          value={name}
          onChangeText={txt => setname(txt)}
        />
      </View>
      <View style={[styles.textInput, {marginTop: 15}]}>
        <TextInput
          style={{color: 'yellow'}}
          placeholder="Email"
          value={email}
          onChangeText={txt => setemail(txt)}
        />
      </View>
      <View style={[styles.textInput, {marginTop: 15}]}>
        <TextInput
          style={{color: 'yellow'}}
          placeholder="contact"
          maxLength={10}
          keyboardType="number-pad"
          value={contact}
          onChangeText={txt => setcontact(txt)}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            updateData();
          }}>
          <Text style={{color: 'green', fontSize: 17, fontWeight: '700'}}>
            Update User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: '85%',
    backgroundColor: 'blue',
    paddingLeft: 15,
    borderRadius: 8,
  },
  button: {
    height: 45,
    width: '38%',
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
});
