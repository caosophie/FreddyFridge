import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from  'react-native';
import { Image } from 'react-native'

const FootBar = (props) => {
    
    return(

        <View style={styles.item}>
            {/* <View style = {styles.itemLeft}> */}
                
                {/* <Text style ={styles.itemText}>{props.text}</Text> */}
                {/* <TouchableOpacity style={styles.square}></TouchableOpacity> */}
            {/* </View> */}
            {/* <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" /> */}
            <Image style={styles.image} source = {require('../assets/fridge.png')} />
            <Image style={styles.image} source = {require('../assets/add.png')} />
            <Image style={styles.image} source = {require('../assets/reminders.png')} />
            {/* <View style={styles.circular}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding: 15,
        // borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        // marginBottom:20,

    },
    image:{
        flex: 1,
        aspectRatio: 2.5, 
        resizeMode: 'contain',
    },
    // square:{
    //     width:24,
    //     height:24,
    //     backgroundColor:'#55BCF6',
    //     opacity:0.4
    // },
    // itemLeft:{
    //     flexDirection:'row',
    //     alignItems:'center',
    //     flexWrap:'wrap'
    // },
    // itemText:{},
    // circular:{},


});

export default FootBar;