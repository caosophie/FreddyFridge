import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Fact = (props) => {

  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}>
                
            </View>
        </View>
        <View style={styles.background}>
            <Text style={styles.itemTitle}>{props.Title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: 'white',
    borderColor: 'lightgrey',
    borderRadius: 10,
    width: 360,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginLeft: 5,
  },
  itemTitle: {
    maxWidth: '80%',
    fontSize: 10,
    fontWeight: 'bold',
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