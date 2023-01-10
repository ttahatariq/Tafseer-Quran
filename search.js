

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
   //console.log("dataaaaa", quran);
   
});

  const filteredItems = quran.filter(item => quran.includes(searchTerm));


  const [searchTerm1, setSearchTerm1] = useState('');
  const [results, setResults] = useState([]);

  const data1 = {
    "items": [
        {
            "AyahNumber": 1,
            "Id": 1,
            "SurahNumber": 1,
            "Tafseer": "(1) عربی کے قاعدے سے \" رحمن \" کے معنی ہیں وہ ذات جس کی رحمت بہت وسیع (Extensive) ہو، یعنی اس رحمت کا فائدہ سب کو پہنچتا ہو اور \" رحیم \" کے معنی ہیں وہ ذات جس کی رحمت بہت زیادہ (Intensive) ہو، یعنی جس پر ہو مکمل طور پر ہو، اللہ تعالیٰ کی رحمت دنیا میں سب کو پہنچتی ہے، جس سے مومن کافر سب فیضیاب ہو کر رزق پاتے ہیں اور دنیا کی نعمتوں سے فائدہ اٹھاتے ہیں اور آخرت میں اگرچہ کافروں پر رحمت نہیں ہوگی ؛ لیکن جس کسی پر (یعنی مومنوں پر) ہوگی، مکمل ہوگی کہ نعمتوں کے ساتھ کسی تکلیف کا کوئی شائبہ نہیں ہوگا۔ رحمن اور رحیم کے معنی میں جو یہ فرق ہے اس کو ظاہر کرنے کے لئے رحمن کا ترجمہ سب پر مہربان اور رحیم کا ترجمہ بہت مہربان کیا گیا ہے۔",
            "TafseerName": "آسان  قران",
            "Translation": "شروع اللہ کے نام سے جو سب پر مہربان ہے، بہت مہربان ہے (1)",
            "TranslationSimple": "شروع اللہ کے نام سے جو سب پر مہربان ہے، بہت مہربان ہے"
          },
          {
            "AyahNumber": 2,
            "Id": 2,
            "SurahNumber": 1,
            "Tafseer": "(2) اگر آپ کسی عمارت کی تعریف کریں تو در حقیقت وہ اس کے بنانے والے کی تعریف ہوتی ہے، لہذا اس کائنات میں جس کسی چیز کی تعریف کی جائے وہ بالآخر اللہ تعالیٰ ہی کی تعریف ہے ؛ کیونکہ وہ چیز اسی کی بنائی ہوئی ہے، تمام جہانوں کا پروردگار کہہ کر اسی طرف اشارہ کیا گیا ہے، انسانوں کا جہان ہو یا جانوروں کا، سب کی تخلیق اور پرورش اللہ تعالیٰ ہی کا کام ہے اور ان جہانوں میں جو کوئی چیز قابل تعریف ہے وہ اللہ تعالیٰ کی تخلیق اور شان ربوبیت کی وجہ سے ہے۔",
            "TafseerName": "آسان  قران",
            "Translation": "تمام تعریفیں اللہ کی ہیں جو تمام جہانوں کا پروردگار ہے (2)",
            "TranslationSimple": "تمام تعریفیں اللہ کی ہیں جو تمام جہانوں کا پروردگار ہے"
          },
          {
            "AyahNumber": 3,
            "Id": 3,
            "SurahNumber": 1,
            "Tafseer": "",
            "TafseerName": "آسان  قران",
            "Translation": "جو سب پر مہربان ہے، بہت مہربان ہے",
            "TranslationSimple": "جو سب پر مہربان ہے، بہت مہربان ہے"
          },
          {
            "AyahNumber": 4,
            "Id": 4,
            "SurahNumber": 1,
            "Tafseer": "(3) روز جزاء کا مطلب ہے وہ دن جب تمام بندوں کو ان کے دنیا میں کیے ہوئے اعمال کا بدلہ دیا جائے گا، یوں تو روز جزاء سے پہلے بھی کائنات کی ہر چیز کا اصلی مالک اللہ تعالیٰ ہے ؛ لیکن یہاں خاص طور پر روز جزاء کے مالک ہونے کا ذکر اس لیے کیا گیا کہ دنیا میں اللہ تعالیٰ نے ہی انسانوں کو بہت سی چیزوں کا مالک بنایا ہوا ہے، یہ ملکیت اگرچہ ناقص اور عارضی ہے تاہم ظاہری صورت کے لحاظ سے ملکیت ہی ہے، لیکن قیامت کے دن جب جزاء وسزا کا مرحلہ آئے گا تو یہ ناقص اور عارضی ملکیتیں بھی ختم ہوجائیں گی، اس وقت ظاہری ملکیت بھی اللہ تعالیٰ کے سوا کسی کی نہ ہوگی۔",
            "TafseerName": "آسان  قران",
            "Translation": "جو روز جزاء کا مالک ہے (3)",
            "TranslationSimple": "جو روز جزاء کا مالک ہے"
          },
          {
            "AyahNumber": 5,
            "Id": 5,
            "SurahNumber": 1,
            "Tafseer": "(4) یہاں سے بندوں کو اللہ تعالیٰ سے دعا کرنے کا طریقہ سکھایا جارہا ہے اور اسی کے ساتھ یہ واضح کردیا گیا ہے کہ اللہ تعالیٰ کے سوا کوئی کسی قسم کی عبادت کے لائق نہیں، نیز ہر کام میں حقیقی مدد اللہ تعالیٰ ہی سے مانگنی چاہیے ؛ کیونکہ صحیح معنی میں کار ساز اس کے سوا کوئی نہیں، دنیا کے بہت سے کاموں میں بعض اوقات کسی انسان سے جو مدد مانگی جاتی ہے، وہ اسے کارساز سمجھ کر نہیں ؛ بلکہ ایک ظاہری سبب سمجھ کر مانگی جاتی ہے۔",
            "TafseerName": "آسان  قران",
            "Translation": "(اے اللہ) ہم تیری ہی عبادت کرتے ہیں اور تجھی سے مدد مانگتے ہیں (4)",
            "TranslationSimple": "(اے اللہ) ہم تیری ہی عبادت کرتے ہیں اور تجھی سے مدد مانگتے ہیں"
          },
          {
            "AyahNumber": 6,
            "Id": 6,
            "SurahNumber": 1,
            "Tafseer": "",
            "TafseerName": "آسان  قران",
            "Translation": "ہمیں سیدھے راستے کی ہدایت عطا فرما",
            "TranslationSimple": "ہمیں سیدھے راستے کی ہدایت عطا فرما"
          },
          {
            "AyahNumber": 7,
            "Id": 7,
            "SurahNumber": 1,
            "Tafseer": "",
            "TafseerName": "آسان  قران",
            "Translation": "ان لوگوں کے راستے کی جن پر تو نے انعام کیا نہ کہ ان لوگوں کے راستے کی جن پر غضب نازل ہوا ہے اور نہ ان کے راستے کی جو بھٹکے ہوئے ہیں۔",
            "TranslationSimple": "ان لوگوں کے راستے کی جن پر تو نے انعام کیا نہ کہ ان لوگوں کے راستے کی جن پر غضب نازل ہوا ہے اور نہ ان کے راستے کی جو بھٹکے ہوئے ہیں۔"
          },
    ]
  };

  const search = () => {
    const results = [];
    for (const item of data1.items) {
      if (item.Tafseer(searchTerm) || item.Translation.includes(searchTerm)) {
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
        <Text key={result.Tafseer}>{result.Tafseer}: {result.Translation}</Text>
      ))}
       
    </View>
  );
};

export default SearchScreen;