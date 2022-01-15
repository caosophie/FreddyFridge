import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height

const Fact = (props) => {

  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}>
                <Image style={styles.icon} source = {require('../assets/QuestionIcon.png')} />
            </View>
        </View>
        <View style={styles.background}>
            <Text style={styles.itemTitle}>{props.Title}</Text>
            <Text style={styles.itemMessage}>{props.Message}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: 'white',
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    width: width,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
   icon: {
    width: 24,
    height: 24,
  },
  square: {
    width: 24,
    height: 24,
    opacity: 1,
    borderRadius: 5,
    marginLeft: 5,
  },
  itemTitle: {
    maxWidth: '80%',
    fontSize: 10,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 10,
  },
  itemMessage: {
    maxWidth: '80%',
    fontSize: 10,
    color: "white",
  },
  background: {
    padding: 10,
    width: 305,
    height: 70,
    backgroundColor: '#3E8F30',
    borderColor: '#3E8F30',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default Fact;