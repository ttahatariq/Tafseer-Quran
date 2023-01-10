

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


  const [searchTerm1, setSearchTerm1] = useState('');
  const [results, setResults] = useState([]);

  const data1 = {
    "items": [
      { "name": "item1", "value": "value1" },
      { "name": "item2", "value": "value2" },
      { "name": "item3", "value": "value3" }
    ]
  };

  const search = () => {
    const results = [];
    for (const item of data1.items) {
      if (item.name.includes(searchTerm) || item.value.includes(searchTerm)) {
        results.push(item);
      }
    }
    setResults(results);
  };

  return (
    <View style={{fontSize:20}}>
        <TextInput
        style={{backgroundColor:'gray',fontSize:30}}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={search}
      />
      {results.map(result => (
        <Text key={result.name}>{result.name}: {result.value}</Text>
      ))}
       
    </View>
  );
};

export default SearchScreen;