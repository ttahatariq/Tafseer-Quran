
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList, ScrollView  } from 'react-native';
import React, { Component, useEffect, useState } from 'react';


export default function ProfileScreen({navigation,route}) {
  console.log('Font Size saved in Globals is = ',global.setting.fs)
    const [first, setFirst]= useState(["City","Discipline","Fees","Rankings","Filters","City","Discipline","Fees","Rankings","Filters"])
    
    const [data, setData] = useState([
        {name:'Comsats University',
        satus:'Public',
        fee:100000,
        admission:'closed',
        location: 'Lahore',
        rank:45
        }, 
        {name:'UET Lahore',
        satus:'Public',
        fee: 50000,
        admission:'open',
        location: 'Lahore',
        rank:42
        }, 
        {name:'IBM',
        satus:'private',
        fee: 150000,
        admission:'open',
        location: 'Karachi',
        rank:4
        }, 
        {name:'UMT',
        satus:'private',
        fee: 180000,
        admission:'open',
        location: 'Sialkot',
        rank:150
        }, 
        {name:'PUCIT',
        satus:'Public',
        fee:25000 ,
        admission:'closed',
        location: 'Lahore',
        rank:80
        }, 
        {name:'UCP',
        satus:'private',
        fee: 200000,
        admission:'open',
        location: 'Lahore',
        rank:210
        }, 
        ]);
        const[movies, setMovies]= useState([])
        const [bgcolor, setbgcolor] = useState(24)
        useEffect(() => {
          const unsubscribe = navigation.addListener('focus', () => {
            console.log('Called When you are back on LearnFlatList')
            setbgcolor(global.setting.bc)
          });
          return unsubscribe;
        }, [navigation]);
       

          const getMovies = async () => {
            try {
             const response = await fetch('https://reactnative.dev/movies.json');
             const json = await response.json();
             setMovies(json.movies);
           } catch (error) {
             console.error(error);
           } finally {
            // setLoading(false);
           }
         }

         useEffect(() => {
            getMovies();
          }, []);
          
    return (
        
      <View style={{flex:1, backgroundColor:bgcolor,color:global.setting.fc}}>
<ScrollView>
    <Text style={{backgroundColor: "grey",
    borderRadius: 25,
    paddingVertical: 10,
    marginLeft:40,
    paddingHorizontal: 25,
    width:300 ,
    marginVertical: 10,
    elevation: 40,
    fontSize:global.setting.fs,
    shadowColor: "black", justifyContent:'center',alignItems:'center'}}>Total Results: 6</Text>
        <FlatList
            data={first}
            horizontal={true}
            renderItem={
                ({item}) => (
                    
                <View style={{backgroundColor:'lightgrey', marginRight:5, marginLeft:5, height:40,borderRadius:30, elevation:25}}>
                    <TouchableOpacity>
                        <Text  style={{fontSize:20, color:'grey',padding:6, borderRadius:50}}>{item}</Text></TouchableOpacity>
                    
                </View>
                )
                }
            
        />
        <FlatList
            data={data}
            renderItem={
                ({item}) => (
                    <View  style={{ flex:1,flexDirection:'row',backgroundColor:'lightgrey', margin:10, height:120,borderRadius:10, elevation:20}}>
                        <View style={{flex:0.4}}>
                        <Image
        style={{height:120,marginLeft:5}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

                        </View>

                    
                <View style={{flex:0.6}}>
                    <Text style={{backgroundColor:'red', fontSize:20, color:'white',borderRadius:10, elevation:20,width:180}}>   {item.name}</Text>
                    <Text style={{fontSize:20, color:'black'}}>Status: {item.satus}</Text>
                    <Text style={{fontSize:20, color:'black'}}>Fee: {item.fee}</Text>
                    <Text style={{fontSize:20, color:'black'}}>Admission: {item.admission}</Text>
                    <Text style={{fontSize:20, color:'black'}}>Location: {item.location}</Text>


                </View>
                </View>
                )
                }
            
        />
        <TouchableOpacity style={{width:150, height:40, backgroundColor:'green', alignItems:'center',justifyContent:'center'}}
          onPress={()=>navigation.navigate('SettingsScreen')}
        >
          <Text style={{fontSize:20, color:'white'}}>Setting Button</Text>
        </TouchableOpacity>

<Text style={{fontSize:60, alignItems:'center'}}>MOVIES</Text>
        <FlatList
            data={movies}
            renderItem={
                ({item}) => (


                <View style={{backgroundColor:'blue', margin:10, height:50,borderRadius:10, elevation:20 }}>
                    
                    <Text style={{fontSize:20, color:'white'}}>  Title: {item.title}</Text>
                    <Text style={{fontSize:20, color:'white'}}>  Year: {item.releaseYear}</Text>
                    


                </View>
                )
                }
            
        />
        </ScrollView>
       
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

