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
  StatusBar,Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer,createStackNavigator} from 'react-navigation';
class HomeScreen extends Component{
      static navigationOptions={
        title:"Home"
    }

  render(){
  return (
   <View style={{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'white'
   }}>
     <Text>Home Screens </Text>
     <Button
     title="Go to User Screen"
     onPress={()=>this.props.navigation.navigate('User',
    {
         userId:12,
         userName:'Francis',
         userLastName:'Joes'
     })
    }
     />

   
   </View>
  );
  }
}



export default HomeScreen;
