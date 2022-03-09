import React,{Component} from "react"
import {StyleSheet,View,Text} from "react-native"

export default class AppHeader extends Component{

  render(){
    return(
  <View style = {styles.headerContainer}>
    <Text style = {styles.headerText}>Fake News!</Text>
  </View>
    )
  }
}

const styles = StyleSheet.create({

  headerText:{

    fontSize: 45,
    color: "#d02d27",
    padding: 20,
    alignSelf: "center",
    fontWeight: "bold",
  
    
    
  },
  headerContainer:{
    backgroundColor: "#33e6e6"
  }
})