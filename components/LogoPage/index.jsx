import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "../../assets/css/common";
import tw from "twrnc";

const LogoPage = () => {
  return (
    <View>
      <Image source={require("../../assets/img/logo.png")} />
      <Text style={tw`text-slate-800 font-bold text-2xl`}>
        Your AI Companion for Everyday Success
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default LogoPage;
