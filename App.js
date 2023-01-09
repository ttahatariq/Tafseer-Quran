import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home'
import ProfileScreen from './ProfileScreen'
import SettingsScreen from './SettingsScreen';
import Chat from './Chat'
import details from './details'

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="details" component={details} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>

    </NavigationContainer>
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
