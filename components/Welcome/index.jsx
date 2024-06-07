import React from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";

const WelcomePage = () => {
  return (
    <View style={tw`flex flex-col justify-center items-center`}>
      <Text style={tw`text-slate-800 font-bold text-2xl`}>
        Welcome to Application
      </Text>
      <Image source={require("../../assets/img/logo.png")} />
      <Text style={tw`text-slate-800 font-bold text-md`}>
        Log with your Open AI account to continue
      </Text>
      <div style={tw`flex justify-between gap-8 w-full`}>
        <button
          style={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded outline-none border-none w-full mt-3`}
        >
          Sign up
        </button>
        <button
          style={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded outline-none border-none w-full mt-3`}
        >
          Log in
        </button>
      </div>
    </View>
  );
};

export default WelcomePage;
