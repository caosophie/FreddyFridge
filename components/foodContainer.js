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
        padding: 10,
        width: 370,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        //flexWrap: 'wrap',
    },

    image:{
        height: 32,
        width: 32,
    },

    foodBoxRight: {
        paddingTop: 3,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 80,
    },

    foodNameContainer: {
        borderRadius: 10,
        backgroundColor: '#192916',
        alignItems: 'center',
        width: 50,
    },

    foodPurchaseDate: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 11,
        margin: 3,

    },

    foodWeight: {
        color: '#192916',
        fontSize: 11,
    },

    foodWeightContainer: {
        alignItems: 'center',
        borderRadius: 10,
        width: 100,
        backgroundColor: '#FFF',
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
        fontSize: 11,
    },

    foodExpiryText: {
        flex: 1,
        fontSize: 11,
        margin: 3,
    },

    line: {
        marginLeft: 10, 
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
        justifyContent: 'flex-start',
    },

});

  export default foodContainer;