
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, Button, FlatList , Pressable} from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import  firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function Home({route, navigation}) {
  
  console.log(route.params.AyahNumber)
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

});

const qurann = quran.filter(filterr);

function filterr(quran) {
  return quran.SurahNumber == route.params.data;
}


  useEffect(()=>{
    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }
  })
  const [visibleItems, setVisibleItems] = useState([]);
  const toggleItem = (itemId) => {
    if (visibleItems.includes(itemId)) {
      setVisibleItems(visibleItems.filter((id) => id !== itemId));
    } else {
      setVisibleItems([...visibleItems, itemId]);
    }
  };
    return (
      
      <View style={{flex:1, backgroundColor:'black'}}>
        
       <View style={{flex:0.1,backgroundColor:"#25be",marginTop:50,alignItems:"center",flexDirection:"row"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
<FontAwesome style={{marginLeft:10}}name="angle-left"  size={30} color="white"/>
</TouchableOpacity>
<View style={{borderWidth:2,borderColor:"white",marginLeft:60,borderRadius:5}}>
  <Text style={{color:"white"}}>
    Dtailed
  </Text>
</View>
       </View>
<View style={{flex:0.9,backgroundColor:"black"}}>
       <FlatList 
                style={{}}
                data={qurann}
                numColumns={1}
                
                renderItem={({item}) => (
                    <Pressable 
                        style={styles.container} 
                        >
                        <View style={styles.innerContainer}>
                                
                        </View>
                        <View>
                        <Text style={styles.mail}>{item.TafseerName}</Text>
                        <Text style={styles.mail}>SurahNumber: {item.SurahNumber}</Text>
                            <Text style={styles.name}>{item.AyahNumber}</Text>
                            
                            <Text style={styles.itemMail}>{item.Tafseer}</Text>
                            
                        </View>
                    </Pressable>
                )}
            />

</View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 15,
      margin: 5,
      marginHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center'
  },
  empty: {
      padding: 100,
      display: 'flex',
      alignItems: 'center'
  },
  innerContainer: {
      alignItems: 'center',
      flexDirection: 'row'
  },
  buttonAdd: {
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      padding: 20,
      marginBottom: 20,
      backgroundColor: '#1ecfea',
  },
  textButton: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
  },
  imagePre: {
      width: 50, 
      height: 50, 
      margin: 5,
      resizeMode: 'contain', 
      borderRadius: 50/2,
      marginRight: 20
  },
  itemName: {
      fontWeight: 'bold'
  },
  itemMail: {
      fontWeight: '300',
      fontSize:20
  }
  });

  