import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import App from './App';
import Login from"./build/login"
import FirstPage from"./build/pages/firstPage"
import SecondPage from "./build/pages/SecondPage"




const MyreactNative = StackNavigator({
    Login: { screen: Login },
    FirstPage: { screen:FirstPage },
    SecondPage: { screen:SecondPage},
  });
  
  AppRegistry.registerComponent('MyreactNative', () => MyreactNative);




