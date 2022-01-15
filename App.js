import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { computeWindowedRenderLimits } from 'react-native/Libraries/Lists/VirtualizeUtils';
import { parseComponentStack } from 'react-native/Libraries/LogBox/Data/parseLogBoxLog';
import Fact from './components/quickFacts.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Fact Title={"Did you know?"} /> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  items: {
    marginTop: 30,
  },

});
