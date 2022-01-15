import { StatusBar } from 'expo-status-bar';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';
// import Food from './components/Food'
import FootBar from './components/FootBar'

export default function App() {
  return (
    <View style={styles.container}>

      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}> Today's tasks</Text>

      </View>

      <View style= {styles.items}>
          <FootBar text={'helllo'}/>
          {/* <FootBar></FootBar> */}
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // position:'relative'

  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
    // flex:1,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    // flex: 1,
    // position:'absolute',
    // bottom:0,
    // height: 100
    // justifyContent: 'flex-end',

    position: 'absolute', left: 0, right: 0, bottom: 0
  },
});
