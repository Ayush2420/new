import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";

const NetflixCard = () => {
    return (
        <View style={styles.container} >
            <Text>Netflix Card</Text>
            <View style={styles.box}>
                <Image  
                style={styles.img}
                source={{ uri: "https://www.pinkvilla.com/imageresize/minnal_murali_mkovie_review.jpg?width=752&format=webp&t=pvorg", }}
                 />
            </View>
        </View>
    )
}
export default NetflixCard;
const styles=StyleSheet.create({
    img:{
        width:300,
        height:300,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
         
        alignItems: 'center',
        justifyContent: 'center',
      },
      box: {
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: "White",
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
    
})
