import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from  'react-native';
import { Image } from 'react-native'

const FootBar = (props) => {
    
    return(
        <View style={styles.item}>
            <Image style={styles.image} source = {require('../assets/fridge.png')} />
            <Image style={styles.image} source = {require('../assets/add.png')} />
            <Image style={styles.image} source = {require('../assets/reminders.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding: 15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',

    },
    image:{
        flex: 1,
        aspectRatio: 2.5, 
        resizeMode: 'contain',
    },

});

export default FootBar;