import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, SafeAreaView } from  'react-native';
import { Image } from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { SafeAreaView } from 'react-native-web';

const NavBar = (props) => {
    
    return(
        <SafeAreaView style={styles.item}>

            <View style={styles.foodNameContainer}>
                    <Text style={styles.foodItemName}>home</Text>
            </View>
            <View style={styles.foodNameContainerWhite}>
                    <Text style={styles.foodItemNameBlack}>fridge</Text>
            </View>
            <View style={styles.foodNameContainerWhite}>
                    <Text style={styles.foodItemNameBlack}>reminders</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        // padding: 10,
        // marginTop:10,
        // paddingBottom:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        

    },
    // word:{
    //     color:'white'
    // },
    // rectangle:{
    //     width:80,
    //     height:30,
    //     borderRadius:100,
    //     backgroundColor:'blue',


    // },

    foodNameContainer: {
        borderRadius: 10,
        backgroundColor: '#192916',
        alignItems: 'center',
        width: 80,
        height: 30,
        justifyContent: 'center',
        marginTop: 15,
        marginBottom:15,

        // border-color: '#192916',
    },
    foodItemName: {
        color: '#FFF',
        fontSize: 14,
    },

    foodNameContainerWhite: {

        borderColor:'#192916',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        width: 80,
        height: 30,
        justifyContent: 'center',
        marginTop: 15,
        marginBottom:15,


    },

    foodItemNameBlack: {
        color: '#192916',
        fontSize: 14,
    },

    // image:{
    //     flex: 1,
    //     aspectRatio: 2.5, 
    //     resizeMode: 'contain',
    // },

});

export default NavBar;