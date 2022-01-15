import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import FootBar from './components/FootBar'

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}> Today's tasks</Text>
      </View>

      <View style= {styles.items}>
          <FootBar text={'helllo'}/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink',

  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    position: 'absolute', left: 0, right: 0, bottom: 0
  },

  items: {
    marginTop: 30,
  },

});
