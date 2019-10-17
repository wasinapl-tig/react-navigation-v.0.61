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

import {createAppContainer,createStackNavigator} from 'react-navigation';
class UserScreen extends Component{
  render(){
  return (
   <View style={{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'white'
   }}>
     <Text>User Screens</Text>
   </View>
  );
  }
}



export default UserScreen;
