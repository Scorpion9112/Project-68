import React from "react"
import {View, Text, StyleSheet} from "react-native"

export default class Instagram extends React.Component{
render(){
  return(
    <View>
<Text style={styles.Inst}> Instagram </Text>
    </View>
  )
}
  
}
const styles=StyleSheet.create({
Inst:{
textAlign:"Center",
justifyContent:"Center",
alignSelf:"Center",
marginTop:200,

}
})