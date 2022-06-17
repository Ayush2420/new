import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const flatListDemo = () => {
    const shows = [
        {
             rank: "1",
            name: "Looop Lapeta",
            actor: "Ayush",
        },
        {
            rank: "2",
            name: "Through My Window",
            actor: "Ayush",
        },
        {
            rank: "3",
            name: "The Tinder Swindler",
            actor: "Ayush",
        },
        {
            rank: "4",
            name: "Shyam Singha Roy",
            actor: "Ayush",
        },
        {
            rank: "5",
            name: "Tall Girl 2",
            actor: "Ayush",
        },
        {
            rank: "6",
            name: "Sooryavanshi",
            actor: "Ayush",
        },
        {
            rank: "7",
            name: "Dolittle",
            actor: "Ayush",
        },
        {
            rank: "8",
            name: "	Shazam!",
            actor: "Ayush",
        },
        {
            rank: "9",
            name: "The Privilege",
            actor: "Ayush",
        },
        {
            rank: "10",
            name: "Chandigarh Kare Aashiqui",
            actor: "Ayush",
        }
    ]
    return (
     <View style={styles.box}>
         <Text style={{fontSize:40,fontFamily:'monospace'}}>List Of Top 10 Shows Of Netflix </Text>
        <FlatList
            style={styles.listStyle}
            keyExtractor={(key) => {
                return key.rank
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
             
            data={shows}
             renderItem={(elements) => {
                console.log(elements.item.name);

                return(<View  style={styles.boxIn}>
                     <Text style={styles.text}>Rank-{elements.item.rank}</Text>
                     <Text style={styles.text}>Movie-{elements.item.name}</Text>
                     <Text style={styles.text}>Actor-{elements.item.actor}</Text>
                  </View> 
                )

            }} />
        </View>
    )
}


export default flatListDemo;
const styles = StyleSheet.create({
    box:{
         height:'80%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:20,
        fontFamily:'monospace',
        color:'white'
        
    },
    boxIn: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
         padding: 30,
          backgroundColor: "grey",
           margin: 20, color: "white",

    },
    listStyle: {
        textAlign:'center',
        margin:20,
        padding:10,
     
         
        
    }
})