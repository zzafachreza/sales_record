import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  MenuProduct,
  MenuCustomer
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

      <Stack.Screen
        name="MenuProduct"
        component={MenuProduct}
        options={{
          headerShown: true,
          headerTitle: 'Data Product',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}

      />


      <Stack.Screen
        name="MenuCustomer"
        component={MenuCustomer}
        options={{
          headerShown: true,
          headerTitle: 'Data Customer',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}

      />



    </Stack.Navigator>
  );
}
