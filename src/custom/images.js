import React from "react";
import { View } from "react-native";
import PropsIMG from "../custom/commponents/propsIMG"
const imagesFile=()=>{
    return(
        <View >
            <PropsIMG
              title="Image1"
              img={require("../../assets/background.jpg")}
            />
            <PropsIMG
              title="Image2"
              img={require("../../assets/background.jpg")}
            />
            <PropsIMG
              title="Image2"
              img={require("../../assets/background.jpg")}
            />
        </View>
    )
}
export default imagesFile;
 