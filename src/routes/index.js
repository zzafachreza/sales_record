import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login
} from '../pages';
import { colors } from '../utils';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      {/* 
      <Stack.Screen
        name="MenuOrangTua"
        component={MenuOrangTua}
        options={{
          headerShown: true,
          headerTitle: 'Orang Tua',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}

      /> */}



    </Stack.Navigator>
  );
}
