import React from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";
import NavBar from "../Nav";
import AskInput from "../AskInput";

const SearchResult = () => {
  return (
    <View style={tw`w-full h-screen`}>
      <NavBar />
      <div style={tw`flex justify-start gap-4 mt-2`}>
        <Image
          style={tw`h-8 w-8`}
          source={require("../../assets/img/avatar.png")}
        />
        <Text style={tw`text-slate-800 font-medium text-md leading-6`}>
          Your question ?
        </Text>
      </div>
      <div style={tw`flex justify-start gap-4 mt-6 pb-4`}>
        <Image
          style={tw`h-8 w-8`}
          source={require("../../assets/img/logo.png")}
        />
        <Text style={tw`text-slate-800 font-light leading-6 text-md`}>
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker in
        </Text>
      </div>
      <div style={tw`w-full bottom-0`}>
        <AskInput />
      </div>
    </View>
  );
};

export default SearchResult;
