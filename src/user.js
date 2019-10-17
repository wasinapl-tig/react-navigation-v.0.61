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
class UserScreen extends Component{

    static navigationOptions={
        title:"User",
        headerStyle:{
            backgroundColor:'#f4511e'

        }
    }


  render(){
    //   console.log(this.props);
    const userId=this.props.navigation.getParam('userId');
      const userName=this.props.navigation.getParam('userName');
        const userLastName=this.props.navigation.getParam('userLastName');
  return (
   <View style={{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'white'
   }}>
     <Text>User Screens</Text>
       <Text>userId:{userId}</Text>
          <Text>userName:{userName}</Text>
             <Text>userLastName:{userLastName}</Text>
         <Button
     title="Go Back"
     onPress={()=>this.props.navigation.navigate('Home')}
     />
   </View>
  );
  }
}



export default UserScreen;
