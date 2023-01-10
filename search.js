

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, Button, FlatList , Pressable} from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import  firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const SearchScreen = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [quran, setUsers] = useState([])
  const firebaseConfig = {
    apiKey: "AIzaSyBhlUvBsUMtOBk2E4G1Pga92SooPhu0ZkA",
    authDomain: "finalpaper-69c43.firebaseapp.com",
    databaseURL: "https://finalpaper-69c43-default-rtdb.firebaseio.com",
    projectId: "finalpaper-69c43",
    storageBucket: "finalpaper-69c43.appspot.com",
    messagingSenderId: "286714054932",
    appId: "1:286714054932:web:a10adc77b443a672b61a01"
  };
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const [option,setOption]=useState(false)
let data=[]
database.ref('/').once('value').then((snapshot) => {
   data = snapshot.val();
   setUsers(data)
   console.log("dataaaaa", quran);
   
});

  const filteredItems = quran.filter(item => quran.includes(searchTerm));

  return (
    <View>
        <Text></Text>
      <TextInput
      style={{fontSize:50, backgroundColor:'gray'}}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <Text>
            {item.split(searchTerm).map((text, i) => (
              i % 2 === 0 ? text : <Text style={{ backgroundColor: 'yellow' }}>{searchTerm}</Text>
            ))}
          </Text>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default SearchScreen;