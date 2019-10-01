import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Linking } from 'expo';


function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>HOME</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text>GO TO NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

function TestScreen() {
  return (
    <View>
      <Text>TEST SCREEN</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View>
      <Text>CHAT SCREEN</Text>
    </View>
  );
}

const SimpleApp = createAppContainer(createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Test: TestScreen,
  Chat: {
    screen: ChatScreen,
    path: 'chat/:user'
  }
}));
const MainApp = () => <SimpleApp uriPrefix={prefix} />;
const prefix = Linking.makeUrl('/');

export default MainApp;

