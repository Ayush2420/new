import React from "react";
import { View , Text, StyleSheet,Image} from "react-native";

const images=(props)=>{
    return(
        <View style={styles.container}>
            <Text >
                {props.title} 
            </Text>
                <Image style={styles.imageS}
                source={props.img}/>
        </View>
    )
}
export default images;
const styles= StyleSheet.create({
    container: {
        display:"flex",
        backgroundColor: 'white', 
        top:10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageS:{
        width:300,
        height:300,
      },
})