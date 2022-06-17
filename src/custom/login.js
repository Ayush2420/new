import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

 
const login = () => {
  const name = "Ayush";
  const onPress=()=>{Alert.alert("Successfully logged in")}
  return (
    <>
      <View style={styles.container} >
        <View style={styles.box}>
           <Text style={styles.cross}>X</Text>
          <Text style={{ fontFamily:'monospace',fontSize: 20, color: 'grey' }}>
            Login
          </Text>
          <TextInput placeholder=' User Name'
            style={{ fontFamily:'monospace',height: 40, width: 200, backgroundColor: 'white', fontSize: 20, borderWidth: 2, borderRadius: 10, marginTop: '10%' }}
          />
          <TextInput placeholder=' Password'
            secureTextEntry={true}
            style={{ fontFamily:'monospace',height: 40, width: 200, backgroundColor: 'white', fontSize: 20, marginTop: '10%', borderRadius: 10, borderWidth: 2 }}
          />
          <Text style={styles.title}>
            <TouchableOpacity
              style={styles.btn}
              onPress={onPress}
            >
              <Text style={styles.btn_on}>Login</Text>
            </TouchableOpacity>

          
          </Text>
        </View>
      </View>

    </>
  );

}
export default login;
//rgba(255, 255, 255,1)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
     
    alignItems: 'center',
    justifyContent: 'center',
  },
  cross:{
    alignSelf: 'flex-end', 

  },
  box: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: "#d3d3d3",
    padding: 24,
    borderRadius: 30,
    paddingVertical: 45,
    paddingHorizontal: 25,
    shadowColor: "black",

    shadowOpacity: 2,
    shadowRadius: 5,
    opacity: 1,

    elevation: 5,

  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
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