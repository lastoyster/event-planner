import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

type CustomButtonProps = {
  onPress: () => void;
  text: string;
  type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
  bgColor?: string;
  fgColor?: string;
};

const CustomButton =({
    onPress,
    text,
    type= "PRIMARY",
    bgColor,
    fgColor,
}: 

CustomButtonProps)=>{
    return(
        <Pressable 
    onPress={onPress}
    style={[
        styles.container,
        styles=[`container_${type}`],
        bgColor? {backgroundColor:bgColor}:{},
    ]}>
    </Pressable>

import { Text, StyleSheet, Pressable } from "react-native";

type CustomButtonProps = {
  onPress: () => void;
  text: string;
  type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
  bgColor?: string;
  fgColor?: string;
};
    );

const styles= StyleSheet.create({
    container:{
        width: "100% ",
        padding:15,
        marginVertical:5,
        alignItems: "center ",
        borderRadius:5,
    },

    container_SECONDARY:{
        borderColor:  "",
        borderWidth:2,
    },

    container_TERTIARY:{},
    text:{
        fontWeight: "bold ",
        color: "white ",
    },

    text_PRIMARY:{},

    text_SECONDARY:{
        color: "3B71F3 ",
    },
    text_TERTIARY:{
        color: "gray ",
    },
});


