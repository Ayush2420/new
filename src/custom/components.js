import react, { Component } from "react";
import {View,StyleSheet,Text} from "react-native";
 
const comp=()=>{
    return(
        <View>
          
            <Text style={styles.para}>
                Hello from Component 
            </Text>
        </View>
    )
}
export default comp;

const styles = StyleSheet.create({
    para:{
        color:"blue",
    }
})
