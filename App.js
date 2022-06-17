import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

import FlatListDemo from './src/custom/flatListDemo';
import Components from "./src/custom/components";
import Login from "./src/custom/login";
import TopshowC from "./src/custom/topshowChallenge";
import Images from "./src/custom/images";
import Netflix from "./src/custom/commponents/Netflixcard"
const App = () => {
 
  return (
    <>
      {/* <View style={styles.container} >
            <Login/>
      </View> */}
     {/* <FlatListDemo/> */}
      {/* <View style={styles.container}>
        <TopshowC/>
    </View> */}
    {/* <Images/> */}

    <View>
      <Netflix/>
    </View>

    </>
  );

}
export default App;
//rgba(255, 255, 255,1)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    top:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  btn: {
    alignItems: "center",
    backgroundColor: "#778899",
    padding:10,
    borderRadius:20,
     
  },
  btn_on: {
    color:'white',
    fontWeight:'700',
    fontFamily:'monospace',
  },
});