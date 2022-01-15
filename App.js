import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
import FootBar from './components/FootBar'
import FoodContainer from './components/foodContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}> Today's tasks</Text>
      </View>
      <View styles={styles.foodContainer}>
        <FoodContainer foodName={'cheese'} foodWeight={'200'} foodExpiry={'3'} foodPurchaseDate={'01/23/24'}/>
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
    padding: 10,

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
  foodContainer:{
    margin: 20,
  },


});
