import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList, ScrollView  } from 'react-native';
import React, { Component, useEffect, useState ,useCallback} from 'react';
import { Audio } from 'expo-av';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { GiftedChat, Send } from 'react-native-gifted-chat'
import * as Sharing from 'expo-sharing'; 
import Icon from 'react-native-vector-icons/FontAwesome';

//import { IconButton } from 'react-native-paper';


export default function Chat({navigation}) {
    

        const [recording, setRecording] = React.useState();
        
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");
        const [messages, setMessages] = useState([]);

        useEffect(() => {
            setMessages([
                {
                    _id: 1,
                    text: "Hello Developer",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "React Native",
                        avatar: 'https://placeimg.com/140/140/any',
                    },     
                },
                {
                    _id: 8,
                    text: 'Hello',
                    createdAt: new Date(),
                    user: {
                      _id: 1,
                      name: 'Developer',
                    },
                  },
                  {
                    _id: 7,
                    text: '#awesome',
                    createdAt: new Date(),
                    user: {
                      _id: 1,
                      name: 'Developer',
                    },
                  },
                  {
                    _id: 6,
                    text: 'Paris',
                    createdAt: new Date(),
                    user: {
                      _id: 2,
                      name: 'React Native',
                    },
                    image:
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
                    sent: true,
                    received: true,
                  },
                  {
                    _id: 5,
                    text: 'Send me a picture!',
                    createdAt: new Date(),
                    user: {
                      _id: 1,
                      name: 'Developer',
                    },
                  },
            ])
        }, [])
    
        const onSend = useCallback((messages = []) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        }, [])

        const onSendVoice = useCallback((messages=[]) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages,messages))
        })

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
    console.log('Recording stopped and stored at', uri);
  }
  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }
  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}> -------- {recordingLine.duration}</Text>
          <TouchableOpacity style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play">
           <Icon name="play" size={30} color="#900" />
          </TouchableOpacity>
         
        </View>
      );
    });
  }
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Icon name="send" size={30} color="black" />
        </View>
      </Send>
    );
  }
  
    return (
<View style={{flex:1, backgroundColor:'grey'}} >
    {/* <View style={{flex:0.1, flexDirection:'row'}}>
        <View style={{flex:0.2}}>
        <Image 
  source={{
    uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
  }} 
  style={{width: 40, height: 40, borderRadius: 400/ 2}} 
/>
        </View>
        <View style={{flex:0.4}}>
<Text style={{fontSize:20, color:'white' , backgroundColor:'black'}}>Hammad Naveed</Text>
            </View>
        
        
    </View> */}
    <View style={{ flex:1}}>
<GiftedChat
            messages={messages}
           
            onSend={messages => onSend(messages)}
            
            user={{
                _id: 1,
                _id:8,
                _id:5,
                _id:6,
                _id:7,
            }}

            renderSend={renderSend}
            
        />
        <Button
      //  messages={messages}
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
        
       
      />
      {getRecordingLines()}
      
    </View>
    
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
    row: {
      flexDirection: 'row',
      flec:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fill: {
      flex: 0.2,
      margin: 16
    },
    button: {
        flex:0.2,
              margin: 16,
             
    }
  });