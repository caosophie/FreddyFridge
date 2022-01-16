import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View, ScrollView, Platform,StatusBar, Image } from 'react-native';
import FootBar from './components/FootBar'
import FoodContainer from './components/foodContainer';
import NavBar from './components/NavBar'
import Fact from './components/quickFacts.js'
import { SafeAreaView } from 'react-native';
import { Nunito_400Medium } from '@expo-google-fonts/nunito';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

    {/*taskbar*/}
    <View style={styles.taskbar}>
      <NavBar style= {styles.navBar}/>
    </View>

    <ScrollView style={styles.scrollView}>

    <View style={styles.remindersView}>
      <View style={styles.remindersSubsection}>
        <View style={styles.subsectionCol}>
          <Text style={styles.subtitle}>expired items</Text>
        </View>
        <View style={styles.subsectionCol}>
          <Image style={styles.remindersImage} source = {require('./assets/order.png')} />
        </View>
      </View>
      <View style={styles.remindersSubsection}>
        <View style={styles.subsectionCol}>
          <Text style={styles.subtitle}>grocery list</Text>
        </View>
        <View style={styles.subsectionCol}>
        <Image style={styles.remindersImage} source = {require('./assets/food.png')} />
        </View>
      </View>
    </View>

    {/* FAQ */}
    <View style={styles.faqView}>
        <Fact Title={"Did you know?"} Message={"Packaged bread lasts for 5 to 7 days after the printed date in the pantry...and up to 6 months when stored in the freezer!"} /> 
    </View>

    {/* fridge */}
    <View style={styles.fridgeView}>
      <Text style={styles.title}>your fridge</Text>
      <View styles={styles.foodContainer}>
          <FoodContainer foodName={'pepper'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
      </View>
      <View styles={styles.foodContainer}>
          <FoodContainer foodName={'tomato'} foodWeight={'100'} foodExpiry={'4'} foodPurchaseDate={'01/05/22'}/>
      </View>
      <View styles={styles.foodContainer}>
          <FoodContainer foodName={'chocolate'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
      </View>
      <View styles={styles.foodContainer}>
          <FoodContainer foodName={'cheese'} foodWeight={'80'} foodExpiry={'2'} foodPurchaseDate={'01/23/24'}/>
      </View>
      <View styles={styles.foodContainer}>
          <FoodContainer foodName={'eggs'} foodWeight={'20'} foodExpiry={'2'} foodPurchaseDate={'01/23/24'}/>
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
    height: 115,
    backgroundColor: "white",
    marginBottom: 5,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  remindersSubsection:{
    height: 85,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    margin: 5,
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '50%',
  },
  subsectionCol:{
    width: '50%',
  },
  subtitle:{
    fontSize: 16,
    marginTop: 10,
  },
  remindersImage:{
    height: 50,
    width: 50,
    marginLeft: 20,
    marginTop: 5,
  },
  faqView:{
    marginBottom: 5
  },
  fridgeView: {
    height: 500,
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
