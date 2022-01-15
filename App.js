import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import FootBar from './components/FootBar'
import Fact from './components/quickFacts.js'
import { SafeAreaView } from 'react-native';
import { Nunito_400Medium } from '@expo-google-fonts/nunito';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/*taskbar*/}
    <View style={styles.taskbar}>

    </View>

    {/* reminders */}
    <View style={styles.remindersView}>

    </View>

    {/* FAQ */}
    <View style={styles.faqView}>
        <Fact Title={"Did you know?"} /> 
    </View>

    {/* fridge */}
    <View style={styles.fridgeView}>
      
    </View>

    <View style= {styles.footbar}>
        <FootBar text={'helllo'}/>
    </View>
  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",

  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  taskbar:{
    backgroundColor: 'white',
    height: 70,
    marginBottom: 5,
  },
  remindersView:{
    height: 200,
    backgroundColor: "white",
    marginBottom: 5,
  },
  faqView:{
    marginBottom: 5
  },
  fridgeView: {
    height: 400,
    backgroundColor: "white",
    marginBottom: 5
  },
  footbar:{
    position: 'absolute', left: 0, right: 0, bottom: 0
  },
});
