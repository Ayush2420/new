import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const flatListDemo = () => {
    const employes = [
        {
            //key: "1",
            name: "Ayush",
        },
        {
            //key: "2",
            name: "Akash",
        },
        {
            //key: "3",
            name: "Ayanabh",
        },
        {
            // key: "4",
            name: "Aaunak",
        },
        {
            //key: "5",
            name: "aj",
        },
        {
            //key: "5",
            name: "A",
        },
        {
            //key: "5",
            name: "Y",
        }
    ]
    return (
     <View>
        <FlatList
            style={styles.listStyle}
            keyExtractor={(key) => {
                return key.name
            }}
             horizontal
             showsHorizontalScrollIndicator={false}
            //numColumns={2}
            data={employes} renderItem={(elements) => {
                console.log(elements.item.name);
                return <Text style={styles.text}>{elements.item.name}</Text>

            }} />
        </View>
    )
}


export default flatListDemo;
const styles = StyleSheet.create({
    text: {
        
        fontSize:20,
         padding: 30,
          backgroundColor: "grey",
           margin: 20, color: "white",
    },
    listStyle: {
        textAlign:'center',
        margin:20,
        padding:10
    }
})