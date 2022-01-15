import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Systrace} from 'react-native';

const foodContainer = (props) => {
    return (
        <SafeAreaView style={styles.foodContainer}>
            <Image style={styles.image} source = {require('../assets/Cheese.png')} />
            <View style={styles.line} />
            <View style={styles.foodBoxLeft}>
                <View style={styles.foodNameContainer}>
                    <Text style={styles.foodItemName}>{props.foodName}</Text>
                </View>
                <Text style={styles.foodExpiryText}>Expires in {props.foodExpiry} days</Text>
            </View>
            <View style={styles.foodBoxRight}>
                <View style={styles.foodWeightContainer}>
                    <Text style={styles.foodWeight}>{props.foodWeight}g</Text>
                </View>
                <Text style={styles.foodPurchaseDate}>Purchased on {props.foodPurchaseDate}</Text>
          </View>

          {/* Need to add a line */}
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    foodContainer: {
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        width: 370,
        height: 80,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    image:{
        height: 50,
        width: 50,
        marginLeft: 10,
    },

    
    foodBoxRight: {
        paddingTop: 3,
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginLeft: 55,
    },

    foodNameContainer: {
        borderRadius: 10,
        backgroundColor: '#192916',
        alignItems: 'center',
        width: 80,
        height: 30,
        justifyContent: 'center',
        marginTop: 15,
    },

    foodPurchaseDate: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 11,
        margin: 3,
    },

    foodWeight: {
        color: '#192916',
        fontSize: 14,
    },

    foodWeightContainer: {
        alignItems: 'center',
        borderRadius: 10,
        width: 125,
        height: 30,
        marginTop: 15,
        backgroundColor: '#FFF',
        borderColor: '#3E8F30',
        borderWidth: 1,
        justifyContent: 'center',
    },

    foodBoxLeft: {
        marginLeft: 10,
        flexDirection: 'column',
        paddingTop: 3,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    foodItemName: {
        color: '#FFF',
        fontSize: 14,
    },

    foodExpiryText: {
        flex: 1,
        fontSize: 11,
        margin: 3,
    },

    line: {
        marginLeft: 10, 
        height: '70%',
        width: 1,
        backgroundColor: '#909090',
        justifyContent: 'flex-start',
    },

});

  export default foodContainer;