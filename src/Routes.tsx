import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Home from "./pages/Home";
import Whois from './pages/User';
import Ready from './pages/Ready';
import Profile from './pages/Profile';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Whois" component={Whois}/>
        <Stack.Screen name="Ready" component={Ready}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
