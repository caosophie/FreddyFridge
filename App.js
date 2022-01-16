import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import FootBar from './components/FootBar'
import FoodContainer from './components/foodContainer';
import NavBar from './components/NavBar'
import Fact from './components/quickFacts.js'
import { SafeAreaView } from 'react-native';
import { Nunito_400Medium } from '@expo-google-fonts/nunito';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*taskbar*/}
      <View style={styles.taskbar}>
        <NavBar style= {styles.navBar} foodName="home"/>
      </View>
      

      {/* reminders */}
      {/* <View style={styles.remindersView}>

      </View> */}

      {/* FAQ */}
      <View style={styles.faqView}>
          <Fact Title={"Did you know?"} Message={"Food solves hunger"} /> 
      </View>

      {/* fridge */}
      <View style={styles.fridgeView}>
        <Text style={styles.title}>meat and poultry</Text>
        <View styles={styles.foodContainer}>
            <FoodContainer foodName={'cheese'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
        </View>
      </View>

      <View style= {styles.footBar}>
          <FootBar />
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    // paddingTop:40
    fontFamily: Nunito_400Medium,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
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
    fontWeight:'bold',
  },
  taskbar:{
    backgroundColor: 'white',
    // height: 70,
    marginBottom: 5,
  },
  foodContainer:{
    margin: 20,
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
    marginBottom: 5,
    padding: 10,
  },
  footBar:{
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: 0
  },
});
