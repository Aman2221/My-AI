import React from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";

const SearchConnection = () => {
  return (
    <View style={tw`flex flex-col justify-center items-center`}>
      <Image source={require("../../assets/img/logo.png")} />
      <Text style={tw`text-slate-800 font-bold text-md`}>
        Searching for connection
      </Text>
    </View>
  );
};

export default SearchConnection;
