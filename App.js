/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';

const AppNavigator=createStackNavigator({
Home:{
  screen:HomeScreen
},
User:{
  screen:UserScreen
}


},
{
initialRouteName:'User'
})

export default createAppContainer(AppNavigator);
