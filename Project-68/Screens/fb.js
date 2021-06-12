import React from "react"
import {View, Text, StyleSheet} from "react-native"

export default class Facebook extends React.Component{
render(){
  return(
    <View>
<Text style={styles.Face}> Facebook </Text>
    </View>
  )
}
  
}
const styles=StyleSheet.create({
Face:{
textAlign:"Center",
justifyContent:"Center",
alignSelf:"Center",
marginTop:200
}
})