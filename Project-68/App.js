import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Instagram from "./Screens/in"
import Facebook from "./Screens/fb"
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component{
render(){
  return(
    <AppContainer/>
  )
}
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
  })

const AppContainer=createAppContainer(TabNavigator)