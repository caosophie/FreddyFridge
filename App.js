import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { ProgressViewIOSComponent, StyleSheet, Text, View, ScrollView, Platform,StatusBar } from 'react-native';
import FootBar from './components/FootBar'
import FoodContainer from './components/foodContainer';
import NavBar from './components/NavBar'
import Fact from './components/quickFacts.js'
import { SafeAreaView } from 'react-native';
import { Nunito_400Medium } from '@expo-google-fonts/nunito';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
    {/*taskbar*/}
    <View style={styles.taskbar}>
      <NavBar style= {styles.navBar}/>
    </View>

    <ScrollView style={styles.scrollView}>
    {/* FAQ */}
    <View style={styles.faqView}>
        <Fact Title={"Did you know?"} Message={"Packaged bread lasts for 5 to 7 days after the printed date in the pantry...and up to 6 months when stored in the freezer!"} /> 
    </View>


      {/* fridge */}
      <View style={styles.fridgeView}>
        <Text style={styles.title}>meat and poultry</Text>
        <View styles={styles.foodContainer}>
            <FoodContainer foodName={'cheese'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
        </View>
      </View>
      <View style={styles.fruitsContainer}>
        <View styles={styles.foodContainer}>
            <FoodContainer foodName={'cheese'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
        </View>
        <View styles={styles.foodContainer}>
            <FoodContainer foodName={'cheese'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
        </View>
        <View styles={styles.foodContainer}>
            <FoodContainer foodName={'cheese'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
        </View>
        <View styles={styles.foodContainer}>
            <FoodContainer foodName={'cheese'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
        </View>
      </View>

    </ScrollView>
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,
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
    height:150,
    backgroundColor: "white",
    marginBottom: 5,
    padding:10,
  },
  scrollView:{
    // paddingBottom:100,
    marginBottom:70,
  },
  blueRectangle:{
    // position: 'absolute',
    backgroundColor:'white',
    left: 0, 
    right: 0, 
    bottom: 0
  },
  fruitsContainer:{
    // marginTop:75,
    paddingTop:10,
    backgroundColor:"white"
  },
  footBar:{
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: 0
  },
});
