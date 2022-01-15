import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import FootBar from './components/FootBar'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar style= {styles.navBar}/>
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}> Today's tasks</Text>
      </View>

      <View style= {styles.footBar}>
          <FootBar/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink',
    // paddingTop:40
  },
  navBar:{
    // marginTop:100
  },

  tasksWrapper:{
    paddingTop:20,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  footBar:{
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: 0
  },


});
