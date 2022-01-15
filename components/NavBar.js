import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, SafeAreaView } from  'react-native';
import { Image } from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { SafeAreaView } from 'react-native-web';

const NavBar = (props) => {
    
    return(
        <SafeAreaView style={styles.item}>
            <TouchableOpacity style={styles.rectangle}><Text style= {styles.word} >Hello</Text></TouchableOpacity>
            <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
            <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item:{
        // backgroundColor:'blue',
        // padding: 0,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        

    },
    word:{
        color:'white'
    },
    rectangle:{
        width:80,
        height:30,
        borderRadius:100,
        backgroundColor:'blue',


    },

    image:{
        flex: 1,
        aspectRatio: 2.5, 
        resizeMode: 'contain',
    },

});

export default NavBar;