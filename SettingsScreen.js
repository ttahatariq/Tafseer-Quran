import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { useEffect } from 'react';
import SelectDropdown from 'react-native-select-dropdown'

export default function SettingsScreen({navigation}) {

    const bgcolor = ["red", "green", "white", "black"];
    const fgcolor = ["blue", "green", "white", "black"];
    const fontsi = [12,18,24,30,36,42,48,54,60,66]

 useEffect(() => {
  return(()=>{
    console.log('is this calling');
  })
 },[]);

 const saveSettings=(a)=>{
    
    global.setting={
      bc:a,
    }
    console.log('pressed')
 }
//  const saveSettings1=(a)=>{
    
//     global.setting1={
//       bc:a,
//     }
//     console.log('pressed')
//  }
//  const saveSettings2=(a)=>{
    
//     global.setting2={
//       fc:a,
//     }
//     console.log('pressed')
//  }

 const nav=() =>{
    navigation.navigate('ProfileScreen')
 }
return (

      <View style={{flex:1, backgroundColor:'green'}}>

        <SelectDropdown 
        data={bgcolor}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem)
            saveSettings(selectedItem)
           
          //  global.setting.bc=selectedItem;
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
           
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
        }}
        />
         {/* <SelectDropdown 
        data={fontsi}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem)
            saveSettings(selectedItem)
           
          //  global.setting.bc=selectedItem;
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
           
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
        }}
        />
          <SelectDropdown 
        data={fgcolor}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem)
            saveSettings2(selectedItem)
           
          //  global.setting.bc=selectedItem;
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
           
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
        }}
        /> */}

        <TouchableOpacity style={{width:100, height:60, backgroundColor:'grey'}}
        onPress={nav}
        
        
        >
            <Text> SUBMIT </Text>
        </TouchableOpacity>
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